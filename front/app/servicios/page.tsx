import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tent, PartyPopper, Coffee, Utensils, Music, Camera, Mountain, Wifi, Users, Heart } from 'lucide-react';

export default function PaginaServicios() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Planes & Servicios
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Descubre todo lo que tenemos para ofrecer
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Glamping Service */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tent className="h-5 w-5 text-primary" />
                Glamping
              </CardTitle>
              <CardDescription>Experiencia única bajo las estrellas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mountain className="h-4 w-4 text-primary" />
                  <span>Vistas panorámicas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Coffee className="h-4 w-4 text-primary" />
                  <span>Desayuno incluido</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-primary" />
                  <span>WiFi gratuito</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Ver detalles</Button>
            </CardContent>
          </Card>

          {/* Venue Service */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PartyPopper className="h-5 w-5 text-primary" />
                Eventos
              </CardTitle>
              <CardDescription>El lugar perfecto para celebrar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Capacidad hasta 200 personas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music className="h-4 w-4 text-primary" />
                  <span>Equipo de sonido incluido</span>
                </li>
                <li className="flex items-center gap-2">
                  <Camera className="h-4 w-4 text-primary" />
                  <span>Locaciones fotográficas</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Ver detalles</Button>
            </CardContent>
          </Card>

          {/* Restaurant Service */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                Restaurante
              </CardTitle>
              <CardDescription>Gastronomía local y gourmet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Ingredientes locales</span>
                </li>
                <li className="flex items-center gap-2">
                  <Coffee className="h-4 w-4 text-primary" />
                  <span>Café de altura</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mountain className="h-4 w-4 text-primary" />
                  <span>Vista al valle</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Ver detalles</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}