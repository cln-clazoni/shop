import ContactForm from "@/components/contact/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Info */}
        <div className="lg:w-1/3">
          <h1 className="text-3xl font-bold mb-6">Contacto</h1>
          <p className="text-muted-foreground mb-8">
            ¿Tienes preguntas sobre nuestros productos o servicios? Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios o utiliza nuestro formulario.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-[#F2B90F] dark:bg-[#0F5FA6] p-3 rounded-lg mr-4">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Whatsapp</h3>
                <a href="https://wa.me/59178859999?text=Hola,%20tengo%20una%20consulta%20sobre%20un%20instrumento%20musical." target="_blank" rel="noopener noreferrer"><p className="text-muted-foreground">+591 78859999</p></a>
                <a href="https://wa.me/59177729222?text=Hola,%20tengo%20una%20consulta%20sobre%20un%20instrumento%20musical." target="_blank" rel="noopener noreferrer"><p className="text-muted-foreground">+591 77729222</p></a>
                <a href="https://wa.me/59178856666?text=Hola,%20tengo%20una%20consulta%20sobre%20un%20instrumento%20musical." target="_blank" rel="noopener noreferrer"><p className="text-muted-foreground">+591 78856666</p></a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#F2B90F] dark:bg-[#0F5FA6] p-3 rounded-lg mr-4">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Correo electrónico</h3>
                <p className="text-muted-foreground">tiendaclazoni@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#F2B90F] dark:bg-[#0F5FA6] p-3 rounded-lg mr-4">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Dirección</h3>
                <p className="text-muted-foreground">#350 Av. Naciones Unidas, La Paz</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#F2B90F] dark:bg-[#0F5FA6] p-3 rounded-lg mr-4">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Horario de atención</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 19:00</p>
                <p className="text-muted-foreground">Sábados: 10:00 - 17:00</p>
                <p className="text-muted-foreground">Domingos: 10:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:w-2/3 bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}