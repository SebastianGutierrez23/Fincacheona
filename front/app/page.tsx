import { Button } from '@/components/ui/button';
import { 
  Tent, PartyPopper, Calendar, ChevronDown, 
  Users, Sparkles, Coffee, Wifi, Utensils, 
  Music, Camera, Mountain, Sun, Moon, Heart,
  MapPin, Phone, Mail, Star
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function PaginaPrincipal() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sección Hero - Banner principal */}
      <section 
        className="seccion-hero relative h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="capa-oscura absolute inset-0 bg-black/50" />
        <div className="contenido-hero relative h-full flex items-center justify-center text-center">
          <div className="contenedor-texto max-w-3xl px-4 animate-fade-in">
            <h1 className="titulo-principal text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-down">
              Finca Cheona
            </h1>
            <p className="subtitulo text-xl md:text-2xl text-white mb-8 animate-slide-up">
              Donde los sueños se convierten en momentos inolvidables
            </p>
            <div className="botones-accion flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                size="lg" 
                className="boton-venue bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/venue">
                  <PartyPopper className="icono-boton mr-2 h-5 w-5" />
                  Reservar Venue
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="boton-glamping bg-white/10 backdrop-blur-md border-white text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/glamping">
                  <Tent className="icono-boton mr-2 h-5 w-5" />
                  Reservar Glamping
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="indicador-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="icono-scroll h-8 w-8 text-white" />
        </div>
      </section>

      {/* Sección de Características */}
      <section className="seccion-caracteristicas py-16 bg-white">
        <div className="contenedor max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="caracteristica flex flex-col items-center text-center">
              <Mountain className="icono-caracteristica h-12 w-12 text-primary mb-4" />
              <h3 className="titulo-caracteristica text-lg font-semibold">Vista Panorámica</h3>
              <p className="texto-caracteristica text-gray-600">Paisajes espectaculares</p>
            </div>
            <div className="caracteristica flex flex-col items-center text-center">
              <Wifi className="icono-caracteristica h-12 w-12 text-primary mb-4" />
              <h3 className="titulo-caracteristica text-lg font-semibold">WiFi Gratuito</h3>
              <p className="texto-caracteristica text-gray-600">Conectividad total</p>
            </div>
            <div className="caracteristica flex flex-col items-center text-center">
              <Utensils className="icono-caracteristica h-12 w-12 text-primary mb-4" />
              <h3 className="titulo-caracteristica text-lg font-semibold">Restaurante</h3>
              <p className="texto-caracteristica text-gray-600">Gastronomía local</p>
            </div>
            <div className="caracteristica flex flex-col items-center text-center">
              <Users className="icono-caracteristica h-12 w-12 text-primary mb-4" />
              <h3 className="titulo-caracteristica text-lg font-semibold">Eventos</h3>
              <p className="texto-caracteristica text-gray-600">Capacidad 200 personas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="seccion-servicios py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="contenedor-servicios max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="titulo-servicios text-4xl font-bold text-center mb-16">
            <span className="texto-degradado bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Experiencias Únicas
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="tarjeta-servicio bg-white rounded-2xl shadow-lg overflow-hidden group">
              <div className="imagen-contenedor relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Venue para eventos"
                  className="imagen-servicio w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="gradiente absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="contenido-tarjeta p-8">
                <h3 className="titulo-tarjeta text-2xl font-bold mb-4">Venue para Eventos</h3>
                <p className="descripcion-tarjeta text-gray-600 mb-6">
                  Celebra tus momentos más especiales en un entorno mágico. Bodas, eventos corporativos y celebraciones únicas cobran vida en nuestros espacios.
                </p>
                <Button 
                  variant="outline"
                  className="boton-tarjeta group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  asChild
                >
                  <Link href="/venue">Descubrir Más</Link>
                </Button>
              </div>
            </div>
            <div className="tarjeta-servicio bg-white rounded-2xl shadow-lg overflow-hidden group">
              <div className="imagen-contenedor relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1520824071669-892f70d8a23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Glamping"
                  className="imagen-servicio w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="gradiente absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="contenido-tarjeta p-8">
                <h3 className="titulo-tarjeta text-2xl font-bold mb-4">Glamping de Lujo</h3>
                <p className="descripcion-tarjeta text-gray-600 mb-6">
                  Vive la naturaleza sin renunciar al confort. Nuestras tiendas de glamping ofrecen una experiencia única bajo las estrellas.
                </p>
                <Button 
                  variant="outline"
                  className="boton-tarjeta group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  asChild
                >
                  <Link href="/glamping">Descubrir Más</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="seccion-testimonios py-24 bg-secondary text-secondary-foreground">
        <div className="contenedor-testimonios max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="titulo-testimonios text-4xl font-bold text-center mb-16">Lo que dicen nuestros visitantes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="testimonio bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="texto-testimonio mb-4">
                  "Una experiencia inolvidable. El lugar es mágico y el servicio excepcional."
                </p>
                <p className="autor-testimonio font-semibold">María González</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto Rápido */}
      <section className="seccion-contacto py-24 bg-white">
        <div className="contenedor-contacto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="info-contacto">
              <h2 className="titulo-contacto text-4xl font-bold mb-8">¿Tienes alguna pregunta?</h2>
              <div className="espacio-contacto space-y-6">
                <div className="flex items-center">
                  <MapPin className="icono-contacto h-6 w-6 text-primary mr-4" />
                  <p>San José, Costa Rica</p>
                </div>
                <div className="flex items-center">
                  <Phone className="icono-contacto h-6 w-6 text-primary mr-4" />
                  <p>+1 234 567 890</p>
                </div>
                <div className="flex items-center">
                  <Mail className="icono-contacto h-6 w-6 text-primary mr-4" />
                  <p>info@fincacheona.com</p>
                </div>
              </div>
            </div>
            <div className="formulario-contacto bg-gray-50 p-8 rounded-2xl">
              <h3 className="titulo-formulario text-2xl font-bold mb-6">Contáctanos</h3>
              <form className="espacio-formulario space-y-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="campo-formulario w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="campo-formulario w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="campo-formulario w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button 
                  className="boton-enviar w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="seccion-cta py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="imagen-fondo absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518623001395-125242310d0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="contenido-cta max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="titulo-cta text-4xl font-bold mb-6">¿Listo para vivir una experiencia única?</h2>
          <p className="descripcion-cta text-xl mb-12 max-w-2xl mx-auto">
            Cada momento en Finca Cheona es una historia por contar. Reserva ahora y crea memorias inolvidables.
          </p>
          <Button 
            size="lg" 
            className="boton-cta bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Consultar Disponibilidad
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}