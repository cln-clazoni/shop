"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Music } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import tiendaCLN from "@/public/images/tiendaCLN.png";
import { InstrumentType } from "@/lib/data";

interface HeaderProps {
  instrumentCategories: InstrumentType[];
}

export default function Header({ instrumentCategories }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 ml-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={tiendaCLN} // Ruta pública de la imagen
              alt="Logo"
              height={15} // Ajusta el tamaño
              width={65}
              layout="intrinsic" 
              className="h-8"
            />
            {/* <span className="font-bold text-xl">CLN - Clazoni</span> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="border-r border-black">
                <NavigationMenuTrigger>Instrumentos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {instrumentCategories.map((category) => (
                      <li key={category.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/catalog/${category.id_property}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {category.name_complete}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {category.descripcion}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="border-r border-black">
                <Link href="/catalog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Catálogo Completo
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="border-r border-black">
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="border-r border-black">
                <Link href="/location" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Ubicación
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/comunidad" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Comunidad
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            className="ml-2"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 py-3">
            <Link
              href="/catalog"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Catálogo Completo
            </Link>
            {instrumentCategories.map((category) => (
              <Link
                key={category.id}
                href={`/catalog/${category.id_property}`}
                className="block px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name_complete}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link
              href="/location"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ubicación
            </Link>
            <Link
              href="/comunidad"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Comunidad
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
