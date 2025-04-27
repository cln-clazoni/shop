import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CLN - Clazoni</h3>
            <p className="text-sm">
              Tu tienda de instrumentos musicales con la mejor selección y los mejores precios.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-[#F2B90F] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-[#F2B90F] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-[#F2B90F] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-[#F2B90F] transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalog/cuerdas" className="hover:text-[#F2B90F] transition-colors">
                  Instrumentos de Cuerdas
                </Link>
              </li>
              <li>
                <Link href="/catalog/viento" className="hover:text-[#F2B90F] transition-colors">
                  Instrumentos de Viento
                </Link>
              </li>
              <li>
                <Link href="/catalog/percusion" className="hover:text-[#F2B90F] transition-colors">
                  Instrumentos de Percusión
                </Link>
              </li>
              <li>
                <Link href="/catalog/teclados" className="hover:text-[#F2B90F] transition-colors">
                  Teclados y Pianos
                </Link>
              </li>
              <li>
                <Link href="/catalog/electronicos" className="hover:text-[#F2B90F] transition-colors">
                  Equipos Electrónicos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#F2B90F] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-[#F2B90F] transition-colors">
                  Catálogo Completo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F2B90F] transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[#F2B90F] transition-colors">
                  Ubicación
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@musichub.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Av. Insurgentes Sur 1234, CDMX</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CLN/Clazoni. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}