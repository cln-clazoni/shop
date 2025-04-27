import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { instrumentsData } from "@/data/instruments";
import { instrumentTypes } from "@/data/types";
import CatalogFilter from "@/components/catalog/catalog-filter";

interface CategoryPageProps {
  params: {
    type: string;
  };
}

export async function generateStaticParams() {
  return instrumentTypes.map((type) => ({
    type: type.id,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { type } = params;
  
  // Check if the category exists
  const category = instrumentTypes.find((t) => t.id === type);
  if (!category) {
    notFound();
  }
  
  // Filter instruments by type
  const instruments = instrumentsData.filter((instrument) => instrument.type === type);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
          <p className="text-muted-foreground">
            {category.description}
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
          {instruments.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No se encontraron instrumentos en esta categoría</h3>
              <p className="text-muted-foreground mb-4">Intenta buscar en otra categoría o vuelve al catálogo completo</p>
              <Button asChild>
                <Link href="/catalog">Ver todo el catálogo</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {instruments.map((instrument) => (
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
                    <h3 className="font-semibold text-lg mb-1">{instrument.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{instrument.brand}</p>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm">Color: {instrument.color}</span>
                      <span className="font-semibold text-[#F23827] dark:text-[#F2B90F]">
                        ${instrument.price.toLocaleString()}
                      </span>
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
          )}
        </div>
      </div>
    </div>
  );
}