'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin, LogIn, UserPlus, Trees as Arbol } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Encabezado() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [haScrolleado, setHaScrolleado] = useState(false);

  useEffect(() => {
    const detectarScroll = () => {
      setHaScrolleado(window.scrollY > 0);
    };

    window.addEventListener('scroll', detectarScroll);
    return () => window.removeEventListener('scroll', detectarScroll);
  }, []);

  const navegacion = [
    { nombre: 'Inicio', ruta: '/' },
    { nombre: 'Reserva', ruta: '/reserva' },
    { nombre: 'Planes & Servicios', ruta: '/servicios' },
    { nombre: 'Cómo Llegar', ruta: '/ubicacion' },
  ];

  return (
    <header 
      className={cn(
        "cabecera-fija fixed w-full z-50 transition-all duration-300",
        haScrolleado 
          ? "bg-white/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <nav className="nav-principal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="contenedor-nav flex h-16 items-center justify-between">
          <div className="contenedor-logo flex items-center space-x-2">
            <Link 
              href="/" 
              className={cn(
                "enlace-logo flex items-center space-x-2 transition-colors duration-300",
                haScrolleado ? "text-primary" : "text-white"
              )}
            >
              <Arbol className="icono-logo h-8 w-8" />
              <span className="texto-logo text-2xl font-bold">Finca Cheona</span>
            </Link>
          </div>

          <div className="nav-escritorio hidden md:flex md:items-center md:space-x-8">
            {navegacion.map((item) => (
              <Link
                key={item.nombre}
                href={item.ruta}
                className={cn(
                  "text-sm font-medium nav-link transition-colors duration-300",
                  haScrolleado 
                    ? "text-gray-700 hover:text-primary" 
                    : "text-white/90 hover:text-white"
                )}
              >
                {item.nombre}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost"
                className={cn(
                  "transition-all duration-300",
                  haScrolleado
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:bg-white/20"
                )}
                asChild
              >
                <Link href="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Acceder
                </Link>
              </Button>
              <Button 
                className={cn(
                  "transition-all duration-300 transform hover:scale-105",
                  haScrolleado
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white/10 backdrop-blur-md border-white text-white hover:bg-white/20"
                )}
                asChild
              >
                <Link href="/registro">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Registrarse
                </Link>
              </Button>
            </div>
          </div>

          <div className="nav-movil flex md:hidden">
            <button
              type="button"
              className={cn(
                "transition-colors duration-300",
                haScrolleado ? "text-gray-500 hover:text-gray-700" : "text-white"
              )}
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {menuAbierto ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {menuAbierto && (
          <div className="menu-movil md:hidden animate-fade-in">
            <div className="space-y-1 pb-3 pt-2">
              {navegacion.map((item) => (
                <Link
                  key={item.nombre}
                  href={item.ruta}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-300",
                    haScrolleado
                      ? "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      : "text-white hover:bg-white/10"
                  )}
                  onClick={() => setMenuAbierto(false)}
                >
                  {item.nombre}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button 
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/login">
                    <LogIn className="h-4 w-4 mr-2" />
                    Acceder
                  </Link>
                </Button>
                <Button 
                  className={cn(
                    "w-full justify-start",
                    haScrolleado
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-white/10 backdrop-blur-md border-white text-white hover:bg-white/20"
                  )}
                  asChild
                >
                  <Link href="/registro">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Registrarse
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}