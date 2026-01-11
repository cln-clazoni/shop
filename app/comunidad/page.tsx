import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LocationPage() {
  return (
    <div
      className="container mx-auto px-4 py-8 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fondoComunidad.png')" }}
    >
      <h1 className="text-3xl font-bold mb-2 text-white">Nuestra comunidad</h1>
      <p className="text-gray-200 mb-8">
        Ingresa a nuestra comunidad y mantente al tanto de las últimas novedades, eventos y promociones.
      </p>
      
      <div className="relative z-10 bg-black bg-opacity-50 text-white p-8 rounded-lg flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Instrumentos animados */}
          <div className="flex gap-8 mb-6">
            {/* Trompeta */}
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
              <rect x="5" y="18" width="40" height="4" rx="2" fill="gold" />
              <ellipse cx="65" cy="20" rx="12" ry="8" fill="orange" className="animate-trompeta" />
              <rect x="45" y="16" width="10" height="8" rx="2" fill="#FFD700" />
              <circle cx="5" cy="20" r="4" fill="#FFA500" />
            </svg>
            {/* Tambor */}
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
              <ellipse cx="30" cy="30" rx="20" ry="8" fill="orange" />
              <rect x="10" y="10" width="40" height="20" rx="8" fill="gold" className="animate-tambor" />
              <line x1="15" y1="10" x2="45" y2="10" stroke="#FFD700" strokeWidth="3" />
            </svg>
          </div>
          {/* Barras y círculos animados de vibración sonido */}
          <div className="flex items-end gap-1 h-16 mb-8">
            <div className="bg-gradient-to-t from-yellow-400 to-orange-500 w-2 rounded animate-bar1 h-8"></div>
            <div className="bg-gradient-to-t from-yellow-400 to-orange-500 w-2 rounded animate-bar2 h-12"></div>
            <div className="bg-gradient-to-t from-yellow-400 to-orange-500 w-2 rounded animate-bar3 h-6"></div>
            <div className="bg-gradient-to-t from-yellow-400 to-orange-500 w-2 rounded animate-bar4 h-14"></div>
            <div className="bg-gradient-to-t from-yellow-400 to-orange-500 w-2 rounded animate-bar5 h-10"></div>
            <div className="bg-gradient-to-t from-yellow-400 to-orange-500 w-2 rounded animate-bar6 h-7"></div>
            <div className="bg-gradient-to-t from-yellow-400 to-orange-500 w-2 rounded animate-bar7 h-11"></div>
          </div>
          <div className="flex gap-4 mb-8">
            <span className="block rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 animate-circle1 w-8 h-8"></span>
            <span className="block rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 animate-circle2 w-6 h-6"></span>
            <span className="block rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 animate-circle3 w-10 h-10"></span>
          </div>
          {/* Fin barras y círculos animados */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300 animate-pulse mb-6 text-center">
            Comunidad Clazoni CLN
          </h2>
          <Link href="https://chat.whatsapp.com/Jk7vX6Xz4Zp5Z6z2Z4v3xN" passHref target="_blank">
            <Button variant="secondary" className="px-12 py-6 text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300 text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-110 border-0 shadow-lg">
              Ingresa aquí
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
