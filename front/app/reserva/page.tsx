'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Check, Coffee, Users, Wifi, Music, Utensils, Camera, Mountain, Home, Tent, Trees } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function PaginaReserva() {
  const [selectedRange, setSelectedRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  const fotosCabana = [
    {
      url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Exterior de la cabaña"
    },
    {
      url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Sala de estar"
    },
    {
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Dormitorio principal"
    }
  ];

  const fotosGlamping = [
    {
      url: "https://images.unsplash.com/photo-1520824071669-892f70d8a23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Tienda Glamping exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1595274459742-4a41d35784ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Interior de tienda"
    },
    {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Vista nocturna"
    }
  ];

  const fotosFinca = [
    {
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Vista aérea de la finca"
    },
    {
      url: "https://images.unsplash.com/photo-1595527313392-a7c0cc898d65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Áreas comunes"
    },
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Jardines"
    }
  ];

  return (
    <div className="contenedor-reserva min-h-screen bg-background">
      {/* Sección Hero */}
      <section className="seccion-hero relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="capa-oscura absolute inset-0 bg-black/50" />
        <div className="contenido-hero relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="titulo-principal text-4xl md:text-5xl font-bold text-white mb-4">
              Reserva tu Estancia
            </h1>
            <p className="subtitulo text-lg md:text-xl text-white/90">
              Elige entre nuestra cabaña, glamping o la finca completa
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="contenido-principal max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="cabana" className="espacio-tabs">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="cabana">
              <Home className="h-4 w-4 mr-2" />
              Cabaña
            </TabsTrigger>
            <TabsTrigger value="glamping">
              <Tent className="h-4 w-4 mr-2" />
              Glamping
            </TabsTrigger>
            <TabsTrigger value="finca">
              <Trees className="h-4 w-4 mr-2" />
              Finca Completa
            </TabsTrigger>
          </TabsList>

          {/* Contenido Cabaña */}
          <TabsContent value="cabana">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="info-reserva space-y-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {fotosCabana.map((foto, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-[16/9]">
                          <img
                            src={foto.url}
                            alt={foto.alt}
                            className="rounded-lg object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                <Card>
                  <CardHeader>
                    <CardTitle>Cabaña de Montaña</CardTitle>
                    <CardDescription>Comodidad y privacidad en la naturaleza</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="precios space-y-4">
                      <div className="precio-item flex justify-between items-center">
                        <span>Por noche (hasta 4 personas)</span>
                        <Badge variant="secondary">$200</Badge>
                      </div>
                      <div className="precio-item flex justify-between items-center">
                        <span>Persona adicional</span>
                        <Badge variant="secondary">$25/noche</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Características de la Cabaña</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="caracteristicas-lista space-y-3">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>2 habitaciones con camas queen</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>Cocina totalmente equipada</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>Sala de estar con chimenea</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>Terraza privada con vista panorámica</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="calendario-reserva">
                <Card>
                  <CardHeader>
                    <CardTitle>Selecciona las fechas</CardTitle>
                    <CardDescription>Mínimo 2 noches</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar 
                      mode="range"
                      selected={selectedRange}
                      onSelect={(range: any) => setSelectedRange(range)}
                      className="rounded-md border"
                    />
                    <Button className="w-full mt-4">
                      Reservar Cabaña
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Contenido Glamping */}
          <TabsContent value="glamping">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="info-reserva space-y-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {fotosGlamping.map((foto, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-[16/9]">
                          <img
                            src={foto.url}
                            alt={foto.alt}
                            className="rounded-lg object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                <Card>
                  <CardHeader>
                    <CardTitle>Tiendas Glamping</CardTitle>
                    <CardDescription>2 unidades disponibles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="precios space-y-4">
                      <div className="precio-item flex justify-between items-center">
                        <span>Tienda Luna (2 personas)</span>
                        <Badge variant="secondary">$120/noche</Badge>
                      </div>
                      <div className="precio-item flex justify-between items-center">
                        <span>Tienda Sol (2 personas)</span>
                        <Badge variant="secondary">$120/noche</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Amenidades Incluidas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="amenidad flex items-center">
                        <Wifi className="h-5 w-5 text-primary mr-2" />
                        <span>WiFi Gratis</span>
                      </div>
                      <div className="amenidad flex items-center">
                        <Coffee className="h-5 w-5 text-primary mr-2" />
                        <span>Desayuno incluido</span>
                      </div>
                      <div className="amenidad flex items-center">
                        <Mountain className="h-5 w-5 text-primary mr-2" />
                        <span>Vista al valle</span>
                      </div>
                      <div className="amenidad flex items-center">
                        <Utensils className="h-5 w-5 text-primary mr-2" />
                        <span>Área de BBQ</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="calendario-reserva">
                <Card>
                  <CardHeader>
                    <CardTitle>Selecciona las fechas</CardTitle>
                    <CardDescription>Mínimo 1 noche</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar 
                      mode="range"
                      selected={selectedRange}
                      onSelect={(range: any) => setSelectedRange(range)}
                      className="rounded-md border"
                    />
                    <Button className="w-full mt-4">
                      Reservar Glamping
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Contenido Finca Completa */}
          <TabsContent value="finca">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="info-reserva space-y-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {fotosFinca.map((foto, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-[16/9]">
                          <img
                            src={foto.url}
                            alt={foto.alt}
                            className="rounded-lg object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                <Card>
                  <CardHeader>
                    <CardTitle>Finca Completa</CardTitle>
                    <CardDescription>Exclusividad total para tu evento</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="precios space-y-4">
                      <div className="precio-item flex justify-between items-center">
                        <span>Día completo (24 horas)</span>
                        <Badge variant="secondary">$1,500</Badge>
                      </div>
                      <div className="precio-item flex justify-between items-center">
                        <span>Fin de semana (3 días)</span>
                        <Badge variant="secondary">$3,500</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Incluye Todo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="caracteristicas-lista space-y-3">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>Cabaña principal</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>2 tiendas de glamping</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>Áreas comunes y jardines</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>Personal de apoyo básico</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>Capacidad total: 8-10 personas</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="calendario-reserva">
                <Card>
                  <CardHeader>
                    <CardTitle>Selecciona las fechas</CardTitle>
                    <CardDescription>Consulta disponibilidad</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar 
                      mode="range"
                      selected={selectedRange}
                      onSelect={(range: any) => setSelectedRange(range)}
                      className="rounded-md border"
                    />
                    <Button className="w-full mt-4">
                      Reservar Finca Completa
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}