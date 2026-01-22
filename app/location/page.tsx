import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Car } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import imagen1 from "@/public/images/somos/1.jpg";
import imagen2 from "@/public/images/somos/2.jpg";
import imagen3 from "@/public/images/somos/3.jpg";

export default function LocationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Nuestra Ubicación</h1>
      <p className="text-muted-foreground mb-8">
        Visítanos en nuestra tienda física para probar nuestros instrumentos musicales.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Map */}
        <div className="lg:col-span-2 rounded-lg overflow-hidden h-[400px] lg:h-[500px] relative">
          <iframe 
            src="https://maps.app.goo.gl/oJLRd1PdAN1oSFee8" 
            width="100%" 
            height="100%" 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
        
        {/* Store Info */}
        <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Tienda Principal</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mt-0.5 mr-3 text-[#F23827] dark:text-[#F2B90F]" />
              <div>
                <h3 className="font-medium">Dirección</h3>
                <p className="text-muted-foreground">#350 Av. Naciones Unidas, La Paz</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 mt-0.5 mr-3 text-[#F23827] dark:text-[#F2B90F]" />
              <div>
                <h3 className="font-medium">Teléfono</h3>
                <a href="https://wa.me/59178859999?text=Hola,%20tengo%20una%20consulta%20sobre%20un%20instrumento%20musical." target="_blank" rel="noopener noreferrer"><p className="text-muted-foreground">+591 78859999</p></a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 mt-0.5 mr-3 text-[#F23827] dark:text-[#F2B90F]" />
              <div>
                <h3 className="font-medium">Correo</h3>
                <p className="text-muted-foreground">tiendaclazoni@gmail.com</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-start">
              <Clock className="h-5 w-5 mt-0.5 mr-3 text-[#F23827] dark:text-[#F2B90F]" />
              <div>
                <h3 className="font-medium">Horario de Atención</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 19:00</p>
                <p className="text-muted-foreground">Sábados: 10:00 - 17:00</p>
                <p className="text-muted-foreground">Domingos: 10:00 - 17:00</p>
              </div>
            </div>
          </div>
          
          <Button asChild className="mt-auto bg-[#0F5FA6] hover:bg-[#147346]">
            <a href="https://maps.app.goo.gl/oJLRd1PdAN1oSFee8" target="_blank" rel="noopener noreferrer">
              <Car className="mr-2 h-5 w-5" />
              Cómo llegar
            </a>
          </Button>
        </div>
      </div>
      
      {/* Photos Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Conoce nuestra tienda</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={imagen1.src}
              alt="Interior de la tienda de instrumentos musicales"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={imagen2.src}
              alt="Guitarra en exhibición"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={imagen3.src}
              alt="Asesoría personalizada en tienda"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}