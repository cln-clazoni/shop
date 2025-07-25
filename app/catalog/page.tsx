import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  getInstruments,
  getInstrumentsBrand,
  getInstrumentsTypes,
} from "@/lib/data";
import CatalogFilter from "@/components/catalog/catalog-filter";

export default async function CatalogPage() {
  const instrumentsData = await getInstruments();
  const instrumentTypes = await getInstrumentsTypes();
  const instrumentBrands = await getInstrumentsBrand();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Catálogo de Instrumentos</h1>
          <p className="text-muted-foreground">
            Explora nuestra colección completa de instrumentos musicales de alta
            calidad
          </p>
        </div>
        <Button asChild variant="outline" className="mt-4 md:mt-0">
          <Link href="/api/download-catalog">
            <Download className="mr-2 h-4 w-4" />
            Descargar PDF
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filter */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 bg-background p-4 rounded-lg border">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 mr-2" />
              <h2 className="text-xl font-semibold">Filtros</h2>
            </div>
            <Suspense fallback={<div>Cargando filtros...</div>}>
              <CatalogFilter types={instrumentTypes} />
            </Suspense>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {instrumentsData.map((instrument) => (
              <Card key={instrument.id} className="overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={instrument.photo}
                    alt={instrument.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Link
                      href={`/catalog/${instrument.type}`}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {
                        instrumentTypes
                          .find((type) => type.id === instrument.type)
                          ?.name.split(" ")[2]
                      }
                    </Link>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">
                    {instrument.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {
                      instrumentBrands.find(
                        (brand) => brand.id === instrument.brand
                      )?.name
                    }
                  </p>

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm">Color: {instrument.color}</span>
                    <Link
                      href={`https://wa.me/59578859999?text=${encodeURIComponent(
                        `Me interesa comprar ${instrument.name}, me envia el precio y formas de pago.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#F23827] hover:bg-[#c52c1f] dark:bg-[#F2B90F] dark:hover:bg-[#d8a406] text-white font-semibold py-2 px-4 rounded-xl transition-colors text-sm"
                    >
                      Comprar
                    </Link>
                  </div>

                  <Link
                    href={`/instrument/${instrument.id}`}
                    className="text-[#0F5FA6] hover:text-[#147346] dark:text-[#F2B90F] dark:hover:text-[#F2A413] text-sm font-medium"
                  >
                    Ver detalles
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
