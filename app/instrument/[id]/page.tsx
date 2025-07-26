import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  getInstrumentById,
  getInstrumentBrands,
  getInstrumentTypes,
  getSimilarInstruments,
} from "@/lib/api";
import type { Instrument, InstrumentBrand, InstrumentType } from "@/lib/data";

interface InstrumentPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  try {
    const instrumentsRes = await fetch(
      "https://n8n-proyect.onrender.com/webhook/cln/instrumentos"
    );
    const instruments: Instrument[] = await instrumentsRes.json();
    return instruments.map((instrument) => ({ id: instrument.id }));
  } catch (error) {
    console.error("Failed to generate static params for instruments", error);
    return [];
  }
}

export default function InstrumentPage({ params }: InstrumentPageProps) {
  const { id } = params;
  const [instrument, setInstrument] = useState<Instrument | null>(null);
  const [instrumentBrands, setInstrumentBrands] = useState<InstrumentBrand[]>(
    []
  );
  const [instrumentTypes, setInstrumentTypes] = useState<InstrumentType[]>([]);
  const [similarInstruments, setSimilarInstruments] = useState<Instrument[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 1. Obtener solo el instrumento actual, tipos y marcas.
        const [currentInstrument, typesData, brandsData] = await Promise.all([
          getInstrumentById(id),
          getInstrumentTypes(),
          getInstrumentBrands(),
        ]);

        setInstrument(currentInstrument);
        setInstrumentTypes(typesData);
        setInstrumentBrands(brandsData);

        // 2. Obtener instrumentos similares de forma eficiente.
        const similarData = await getSimilarInstruments(
          currentInstrument.type,
          currentInstrument.id
        );
        setSimilarInstruments(similarData);
      } catch (error) {
        console.error(error);
        // Si el error es un 404, muestra la página de notFound.
        if (error && typeof error === "object" && "status" in error && error.status === 404) {
          notFound();
        }
        // Aquí podrías establecer un estado de error para mostrar un mensaje al usuario.
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading || !instrument) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
      </div>
    );
  }

  const brandName = instrumentBrands.find(
    (brand) => brand.id === instrument.brand
  )?.name;
  const type = instrumentTypes.find((type) => type.id === instrument.type);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center mb-6">
        <Link
          href="/catalog"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Catálogo
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/catalog/${type?.id_property}`}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          {type?.name_complete}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-sm">{instrument.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Instrument Image */}
        <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src={instrument.photo}
            alt={instrument.name}
            fill
            className="brightness-150 saturate-160 contrast-110 object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Instrument Details */}
        <div className="flex flex-col">
          <div className="mb-2">
            <Link
              href={`/catalog/${type?.id_property}`}
              className="text-sm bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground px-3 py-1 rounded-full transition-colors inline-block"
            >
              {type?.name_complete}
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-2">{instrument.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{brandName}</p>

          <p className="text-base mb-6">{instrument.descripcion}</p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Detalles</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Marca</span>
                <span className="font-medium">{brandName}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Color</span>
                <span className="font-medium">{instrument.color}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Tipo</span>
                <span className="font-medium">{type?.name_complete}</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Accesorios incluidos</h3>
            <div className="flex flex-wrap gap-2">
              {instrument.accessories.map((accessory, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <Box className="h-3 w-3" />
                  {accessory}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <Button
              asChild
              className="bg-[#0F5FA6] hover:bg-[#147346]"
              size="lg"
            >
              <a
                href={`https://wa.me/59178859999?text=${encodeURIComponent(
                  `Me interesa comprar ${instrument.name}, me envia el precio y formas de pago.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar disponibilidad
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/api/download-catalog">
                <Download className="mr-2 h-5 w-5" />
                Catálogo PDF
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Similar Instruments */}
      {similarInstruments.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Instrumentos similares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarInstruments.map((instrument) => (
              <Card key={instrument.id} className="overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={instrument.photo}
                    alt={instrument.name}
                    fill
                    className="brightness-150 saturate-160 contrast-110 object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{instrument.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {
                      instrumentBrands.find(
                        (brand) => brand.id === instrument.brand
                      )?.name
                    }
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Color: {instrument.color}</span>
                    <Link
                      href={`/instrument/${instrument.id}`}
                      className="text-[#0F5FA6] hover:text-[#147346] text-sm font-medium"
                    >
                      Ver detalles
                    </Link>
                    <Link
                      href={`https://wa.me/59178859999?text=${encodeURIComponent(
                        `Me interesa comprar ${instrument.name}, me envia el precio y formas de pago.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#F23827] hover:bg-[#c52c1f] dark:bg-[#F2B90F] dark:hover:bg-[#d8a406] text-white font-semibold py-2 px-4 rounded-xl transition-colors text-sm"
                    >
                      Comprar
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <Button variant="ghost" asChild className="flex items-center">
          <Link href="/catalog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al catálogo
          </Link>
        </Button>
      </div>
    </div>
  );
}
