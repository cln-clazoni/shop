"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { InstrumentType } from "@/lib/data";

interface CatalogFilterProps {
  types: InstrumentType[];
}

export default function CatalogFilter({ types }: CatalogFilterProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <Accordion type="single" collapsible defaultValue="type" className="w-full">
      <AccordionItem value="type">
        <AccordionTrigger>Tipo de Instrumento</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <Link href="/catalog">
              <div 
                className={cn(
                  "flex items-center justify-between p-2 rounded-md hover:bg-secondary cursor-pointer",
                  selectedType === null && "bg-secondary"
                )}
                onClick={() => setSelectedType(null)}
              >
                <span>Todos los instrumentos</span>
                {selectedType === null && <Check className="h-4 w-4" />}
              </div>
            </Link>
            {types.map((type) => (
              <Link key={type.id} href={`/catalog/${type.id}`}>
                <div 
                  className={cn(
                    "flex items-center justify-between p-2 rounded-md hover:bg-secondary cursor-pointer",
                    selectedType === type.id && "bg-secondary"
                  )}
                  onClick={() => setSelectedType(type.id)}
                >
                  <span>{type.name}</span>
                  {selectedType === type.id && <Check className="h-4 w-4" />}
                </div>
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="price">
        <AccordionTrigger>Rango de Precio</AccordionTrigger>
        <AccordionContent>
          <div className="p-2">
            <p className="text-muted-foreground text-sm mb-2">Funcionalidad a implementar en el futuro</p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="brand">
        <AccordionTrigger>Marca</AccordionTrigger>
        <AccordionContent>
          <div className="p-2">
            <p className="text-muted-foreground text-sm mb-2">Funcionalidad a implementar en el futuro</p>
          </div>
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
}
