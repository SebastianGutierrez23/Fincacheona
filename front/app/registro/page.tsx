'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';

export default function PaginaRegistro() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const nuevoUsuario = {
      Direccióncliente: direccion,
      Correocliente: email,
      Telefonocliente: parseInt(telefono),
      Tipoidentificación: tipoDocumento,
      Numeroidentificacióncliente: parseInt(numeroDocumento),
      Nombredecliente: nombre,
      Apellidosdecliente: apellidos,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/cliente_insert/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario),
      });

      if (response.ok) {
        alert('Usuario registrado correctamente');
        // Puedes limpiar los campos si lo deseas
      } else {
        alert('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input id="nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellidos">Apellidos</Label>
              <Input id="apellidos" required value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="direccion">Dirección</Label>
              <Input id="direccion" required value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input id="telefono" type="number" required value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipo-documento">Tipo de documento</Label>
              <Select onValueChange={setTipoDocumento}>
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
              <Input id="numero-documento" type="number" required value={numeroDocumento} onChange={(e) => setNumeroDocumento(e.target.value)} />
            </div>
          
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Crear cuenta</Button>
            <div className="text-center text-sm">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="text-primary hover:underline font-medium">Iniciar sesión</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
