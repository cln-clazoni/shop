import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { instrumentsData } from "@/data/instruments";
import { instrumentTypes } from "@/data/types";

interface InstrumentPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  // Aquí obtienes los valores de "id" para las rutas que deseas pre-renderizar
  const instrumentIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']; // Aquí deberías obtener los ids de una API o base de datos

  return instrumentIds.map(id => ({
    id: id.toString(), // Convierte el id a string si es necesario
  }));
}

export default function InstrumentPage({ params }: InstrumentPageProps) {
  const { id } = params;
  
  // Find the instrument
  const instrument = instrumentsData.find((inst) => inst.id === id);
  if (!instrument) {
    notFound();
  }

  // Find similar instruments (same type, excluding current)
  const similarInstruments = instrumentsData
    .filter((inst) => inst.type === instrument.type && inst.id !== instrument.id)
    .slice(0, 3);

  // Get the instrument type name
  const typeName = instrumentTypes.find((type) => type.id === instrument.type)?.name;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center mb-6">
        <Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground">
          Catálogo
        </Link>
        <span className="mx-2">/</span>
        <Link 
          href={`/catalog/${instrument.type}`} 
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          {typeName}
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
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        
        {/* Instrument Details */}
        <div className="flex flex-col">
          <div className="mb-2">
            <Link 
              href={`/catalog/${instrument.type}`} 
              className="text-sm bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground px-3 py-1 rounded-full transition-colors inline-block"
            >
              {typeName}
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">{instrument.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{instrument.brand}</p>
          
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-[#F23827] dark:text-[#F2B90F]">
              ${instrument.price.toLocaleString()}
            </span>
          </div>
          
          <p className="text-base mb-6">{instrument.description}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Detalles</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Marca</span>
                <span className="font-medium">{instrument.brand}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Color</span>
                <span className="font-medium">{instrument.color}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Tipo</span>
                <span className="font-medium">{typeName}</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Accesorios incluidos</h3>
            <div className="flex flex-wrap gap-2">
              {instrument.accessories.map((accessory, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1">
                  <Box className="h-3 w-3" />
                  {accessory}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <Button className="bg-[#0F5FA6] hover:bg-[#147346]" size="lg">
              Consultar disponibilidad
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
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{instrument.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{instrument.brand}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Color: {instrument.color}</span>
                    <Link 
                      href={`/instrument/${instrument.id}`}
                      className="text-[#0F5FA6] hover:text-[#147346] text-sm font-medium"
                    >
                      Ver detalles
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