import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

export default function PaginaLogin() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <LogIn className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">Iniciar sesión</CardTitle>
          <CardDescription className="text-center">
            Ingresa a tu cuenta para continuar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
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
              <Label htmlFor="password">Contraseña</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                className="bg-background"
              />
            </div>
            <div className="flex items-center justify-end">
              <Link 
                href="/recuperar-password" 
                className="text-sm text-primary hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90" type="submit" id="Inicio">
            
              Iniciar sesión
            </Button>
            <div className="text-center text-sm">
              ¿No tienes una cuenta?{' '}
              <Link 
                href="/registro" 
                className="text-primary hover:underline font-medium"
              >
                Regístrate
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}