import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';

export default function PaginaRegistro() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <UserPlus className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">Crear una cuenta</CardTitle>
          <CardDescription className="text-center">
            Ingresa tus datos para registrarte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input 
                id="nombre" 
                placeholder="Juan Pérez" 
                required 
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="juan@ejemplo.com" 
                required 
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipo-documento">Tipo de documento</Label>
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Selecciona el tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cedula">Cédula de Ciudadanía</SelectItem>
                  <SelectItem value="pasaporte">Pasaporte</SelectItem>
                  <SelectItem value="extranjeria">Cédula de Extranjería</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="numero-documento">Número de documento</Label>
              <Input 
                id="numero-documento" 
                placeholder="1234567890" 
                required 
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar contraseña</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                required 
                className="bg-background"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90" type="submit">
              Crear cuenta
            </Button>
            <div className="text-center text-sm">
              ¿Ya tienes una cuenta?{' '}
              <Link 
                href="/login" 
                className="text-primary hover:underline font-medium"
              >
                Iniciar sesión
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}