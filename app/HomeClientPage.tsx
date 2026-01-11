"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instrument, InstrumentBrand, InstrumentType } from "@/lib/data";
import {
  getInstruments,
  getInstrumentBrands,
  getInstrumentTypes,
} from "@/lib/api";
import fondo from "@/public/images/fondo.png";
import TikTokSection from "@/components/tiktok/TiktokSection";
import DownloadCatalogButton from "@/components/catalogo/BotonDescargarCatalogo";

export default function HomeClientPage() {
  const [instrumentsData, setInstrumentsData] = useState<Instrument[]>([]);
  const [instrumentBrands, setInstrumentBrands] = useState<InstrumentBrand[]>(
    []
  );
  const [instrumentTypes, setInstrumentTypes] = useState<InstrumentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [fetchedInstruments, fetchedBrands, fetchedTypes] =
          await Promise.all([
            getInstruments(),
            getInstrumentBrands(),
            getInstrumentTypes(),
          ]);
        setInstrumentsData(fetchedInstruments);
        setInstrumentBrands(fetchedBrands);
        setInstrumentTypes(fetchedTypes);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        Error al cargar la página. Por favor, intente de nuevo más tarde.
      </div>
    );
  }

  const featuredInstruments = instrumentsData.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-black/50"
          style={{
            backgroundImage: `url(${fondo.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Encuentra el instrumento perfecto para tí.
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Amplio catálogo de instrumentos musicales de las mejores marcas
              con la mejor calidad y precio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#F2B90F] text-black hover:bg-[#F2A413]"
              >
                <Link href="/catalog">
                  Ver Catálogo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-black border-white hover:bg-white/10 hover:text-white bg-[#FFFFFF]"
              >
                <Link href="/contact">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Categorías de Instrumentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {instrumentTypes.map((category) => (
              <Link key={category.id} href={`/catalog/${category.id}`}>
                <div className="group relative h-64 rounded-lg overflow-hidden transition-transform hover:scale-105">
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors z-10" />
                  <Image
                    src={category?.photo ?? ''}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20 p-10">
                    <h3 className="text-xl font-bold text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Instruments */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Instrumentos Destacados</h2>
          <p className="text-muted-foreground mb-8">
            Nuestra selección de los mejores instrumentos disponibles
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredInstruments.map((instrument) => (
              <Card key={instrument.id} className="overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={instrument?.photo ?? ''}
                    alt={instrument.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{instrument.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Marca: {" "}
                    {
                      instrumentBrands.find(
                        (brand) => brand.id === instrument.brand
                      )?.nombre
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

          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0F5FA6] hover:bg-[#147346]"
            >
              <Link href="/catalog">
                Ver todo el catálogo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TikTokSection />

      {/* Download Catalog Section */}
      <section className="py-16 bg-[#F2B90F] dark:bg-[#F2B90F]/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            ¿Prefieres un catálogo en PDF?
          </h2>
          <p className="text-black/80 mb-8 max-w-2xl mx-auto">
            Descarga nuestro catálogo completo en formato PDF para ver todos
            nuestros productos disponibles, incluso sin conexión.
          </p>
          <DownloadCatalogButton />
        </div>
      </section>
    </div>
  );
}
