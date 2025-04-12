import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Phone, Clock, Info } from 'lucide-react';

export default function PaginaUbicacion() {
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
              Cómo Llegar
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Te esperamos en Finca Cheona
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-gray-100">
        <div className="relative w-full h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3929.7646440839387!2d-84.13077792570924!3d9.951650674155213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e6112929decd%3A0x49c8a7e119807e03!2sFinca%20Cheona!5e0!3m2!1ses!2s!4v1711506547961!5m2!1ses!2s"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="absolute top-4 right-4 w-full max-w-sm">
            <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Finca Cheona
                </CardTitle>
                <CardDescription>
                  Calle Yerbabuena, San José Province, San José, Costa Rica
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Abierto: 8:00 AM - 6:00 PM</span>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <p className="font-mono text-sm">9.951651° N, 84.128365° W</p>
                </div>
                <Button className="w-full" asChild>
                  <a 
                    href="https://maps.app.goo.gl/Eco5g6VGh7UP6wAL9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Obtener Direcciones
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Card */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contacto Directo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-primary-foreground/90">
                ¿Necesitas ayuda para llegar? Llámanos:
              </p>
              <div className="flex flex-col gap-2">
                <Button variant="secondary" className="w-full">
                  +1 234 567 890
                </Button>
                <Button variant="secondary" className="w-full">
                  info@fincacheona.com
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Tips para Llegar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <span>Recomendamos llegar durante horas de luz natural</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <span>El último tramo es camino de lastre, conducir con precaución</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <span>Hay señalización en los puntos principales del recorrido</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}