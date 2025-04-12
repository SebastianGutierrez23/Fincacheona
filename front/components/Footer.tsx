import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518623001395-125242310d0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Finca Cheona</h3>
            <p className="text-secondary-foreground/80">
              Tu escape perfecto para eventos especiales y experiencias únicas en la naturaleza.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { text: 'Venue para Eventos', href: '/venue' },
                { text: 'Glamping', href: '/glamping' },
                { text: 'Galería', href: '/gallery' },
                { text: 'Contacto', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contacto</h3>
            <div className="space-y-3">
              <p className="flex items-center text-secondary-foreground/80">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                San José, Costa Rica
              </p>
              <p className="flex items-center text-secondary-foreground/80">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                +1 234 567 890
              </p>
              <p className="flex items-center text-secondary-foreground/80">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                info@fincacheona.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-secondary-foreground/60">
            © {new Date().getFullYear()} Finca Cheona. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}