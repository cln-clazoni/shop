import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Car } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.494514448966!2d-99.17440042521416!3d19.39590098184497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff79dbb55fb3%3A0x8fe179d02d6ddb89!2sAv.%20Insurgentes%20Sur%201234%2C%20Tlacoquemecatl%20del%20Valle%2C%20Benito%20Ju%C3%A1rez%2C%2003200%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1687542711489!5m2!1ses-419!2smx" 
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
                <p className="text-muted-foreground">Av. Insurgentes Sur 1234,</p>
                <p className="text-muted-foreground">Col. Del Valle, CDMX, C.P. 03100</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 mt-0.5 mr-3 text-[#F23827] dark:text-[#F2B90F]" />
              <div>
                <h3 className="font-medium">Teléfono</h3>
                <p className="text-muted-foreground">+52 55 1234 5678</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 mt-0.5 mr-3 text-[#F23827] dark:text-[#F2B90F]" />
              <div>
                <h3 className="font-medium">Correo</h3>
                <p className="text-muted-foreground">tienda@musichub.com</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-start">
              <Clock className="h-5 w-5 mt-0.5 mr-3 text-[#F23827] dark:text-[#F2B90F]" />
              <div>
                <h3 className="font-medium">Horario de Atención</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 19:00</p>
                <p className="text-muted-foreground">Sábados: 10:00 - 14:00</p>
                <p className="text-muted-foreground">Domingos: Cerrado</p>
              </div>
            </div>
          </div>
          
          <Button asChild className="mt-auto bg-[#0F5FA6] hover:bg-[#147346]">
            <a href="https://www.google.com/maps/dir/?api=1&destination=Av.+Insurgentes+Sur+1234,+Del+Valle,+CDMX,+Mexico" target="_blank" rel="noopener noreferrer">
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
              src="https://images.pexels.com/photos/4473407/pexels-photo-4473407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Interior de la tienda de instrumentos musicales"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3482620/pexels-photo-3482620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Guitarra en exhibición"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/4087991/pexels-photo-4087991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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