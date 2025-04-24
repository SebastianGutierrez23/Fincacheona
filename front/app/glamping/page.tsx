'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Tent, Coffee, Wifi, Mountain, Utensils, Check, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


import React, { useEffect, useState } from 'react';

import { get } from 'node:http';
import { response } from 'express';

// Interfaz para los usuarios
interface Cliente {
  //id: number;
  Direccióncliente : string;
  Correocliente : string;
  Telefonocliente : number; 
  Tipoidentificación : string;
  Numeroidentificacióncliente : number;
  Nombredecliente : string;
  Apellidosdecliente : string;
}


export default function PaginaGlamping() {

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputId, setInputId] = useState<number | ''>('');
  const eliminarCliente = (id: number) => {
    setIsLoading(true);
    fetch(`http://127.0.0.1:8000/cliente_1/${id}`, {method: 'DELETE',})
      .then((response) => {
        if (response.ok) {
          alert(`Cliente con ID ${id} eliminado correctamente`);
          setClientes(clientes.filter((cliente) => cliente.Numeroidentificacióncliente !== id));
        } else {
          alert('No se pudo eliminar el cliente');
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error eliminando cliente:', error);
        setIsLoading(false);
      });
  };
  
  // Función para obtener los datos del cliente desde la API
  const glampingClick = (params: number) => {
    setIsLoading(true);
    fetch(`http://127.0.0.1:8000/clientes/?id=${params}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setClientes(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching clientes:', error);
        setIsLoading(false);
      });
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1520824071669-892f70d8a23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Glamping de Lujo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
              Vive la naturaleza sin renunciar al confort
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 animate-slide-up"
              onClick={() => glampingClick(3)}
                //async function glampinclick(params:number ) {
                // const App: React.FC = () => {
               // const [clientes, setclientes] = useState<Cliente[]>([]);
                //const [Direccióncliente, setDireccióncliente] = useState<string>('');
                //const [Correocliente, setCorreocliente] = useState<string>('');
               // const [Telefonocliente, setTelefonocliente] = useState<number>();
               // const [Tipoidentificación, setTipoidentificación] = useState<string>();
               // const [Numeroidentificacióncliente, setNumeroidentificacióncliente] = useState<number>();
              //  const [Nombredecliente, setNombredecliente] = useState<string>();
              //  const [Apellidosdecliente, setApellidosdecliente] = useState<string>();


                // Obtener usuarios de la API
              //  useEffect(() => {
                 // fetch('http://127.0.0.1:8000/clientes/${params}', { method: 'GET' }, console.log(data))
                 //   .then((response) => response.json())
                  //  .then((data) => setclientes(data))
                  //  .catch((error) => console.error('Error fetching clientes:', error));
             //   }, []);
            
            >
              
              Reservar Ahora

              
            </Button>
            <input
  type="number"
  placeholder="Ingrese ID del cliente"
  value={inputId}
  onChange={(e) => setInputId(Number(e.target.value))}
  className="w-full md:w-64 px-4 py-2 rounded-md border border-gray-300 mb-4"
/>

<Button 
  size="lg"
  className="bg-primary text-primary-foreground hover:bg-primary/90 animate-slide-up"
  onClick={() => {
    if (inputId !== '') {
      glampingClick(inputId);
    }
  }}
>
  Buscar Cliente

 
</Button>

<Button 
  size="lg"
  variant="destructive"
  className="ml-2"
  onClick={() => {
    if (inputId !== '') {
      eliminarCliente(inputId);
    }
  }}
>
  Eliminar Cliente
</Button>


          </div>

        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Images and Info */}
          <div className="space-y-8">
            <Carousel className="w-full">
              <CarouselContent>
                {[
                  {
                    url: "https://images.unsplash.com/photo-1595274459742-4a41d35784ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                    alt: "Interior de tienda de glamping"
                  },
                  {
                    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                    alt: "Vista nocturna del glamping"
                  },
                  {
                    url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                    alt: "Amenidades de glamping"
                  }
                ].map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[16/9]">
                      <img
                        src={image.url}
                        alt={image.alt}
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
                <CardTitle>Nuestras Tiendas de Glamping</CardTitle>
                <CardDescription>
                  Experimenta el lujo en medio de la naturaleza
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Tienda Luna</h3>
                    <Badge variant="secondary">$120/noche</Badge>
                    <p className="text-sm text-muted-foreground">
                      Perfecta para parejas
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Tienda Sol</h3>
                    <Badge variant="secondary">$120/noche</Badge>
                    <p className="text-sm text-muted-foreground">
                      Vista panorámica
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Amenidades Incluidas</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-primary" />
                      <span className="text-sm">Desayuno incluido</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-primary" />
                      <span className="text-sm">WiFi gratuito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mountain className="h-4 w-4 text-primary" />
                      <span className="text-sm">Vistas panorámicas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="h-4 w-4 text-primary" />
                      <span className="text-sm">Área de BBQ</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Lo que incluye cada tienda</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Cama king size con ropa de cama premium</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Baño privado con ducha</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Terraza privada con sillas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Calefacción y ventilación</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardHeader>
                <CardTitle>Opiniones de Huéspedes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Ana Martínez",
                      comment: "Una experiencia única. La comodidad de un hotel con la aventura del camping.",
                      rating: 5
                    },
                    {
                      name: "Carlos Ruiz",
                      comment: "Las vistas son espectaculares y el servicio es excelente.",
                      rating: 5
                    }
                  ].map((review, index) => (
                    <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm mb-2">{review.comment}</p>
                      <p className="text-sm font-semibold">{review.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Reserva tu Estancia</CardTitle>
                <CardDescription>
                  Selecciona las fechas para tu experiencia glamping
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Calendar
                  mode="range"
                  className="rounded-md border"
                />
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Precio por noche</span>
                    <span className="font-semibold">$120</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Limpieza</span>
                    <span className="font-semibold">$30</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">$150</span>
                  </div>
                </div>
                <Button className="w-full">
                  Reservar Ahora
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  No se te cobrará nada por ahora
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}