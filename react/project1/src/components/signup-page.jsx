'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignupPage() {
  return (
    (<div className="flex min-h-screen bg-blue-600 text-white">
      <div className="w-full flex justify-end items-center">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-bl-full" />
        <div className="w-full max-w-md p-8 mr-8 z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">NicaWay</h1>
            <p className="text-lg">
              Tu guía perfecta para<br />el paraíso nicaragüense.
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre completo</Label>
              <Input
                id="fullName"
                type="text"
                className="bg-blue-500 border-blue-400 text-white placeholder-blue-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Nombre de usuario</Label>
              <Input
                id="username"
                type="text"
                className="bg-blue-500 border-blue-400 text-white placeholder-blue-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                className="bg-blue-500 border-blue-400 text-white placeholder-blue-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                className="bg-blue-500 border-blue-400 text-white placeholder-blue-200" />
            </div>
            <Button className="w-full bg-white text-blue-600 hover:bg-blue-100">Crear cuenta</Button>
          </form>
          <div className="text-center my-4">o</div>
          <Button
            variant="outline"
            className="w-full bg-black text-white border-none hover:bg-gray-800">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Registrarse con Google
          </Button>
          <p className="text-center mt-4 text-sm">
            ¿Ya tienes una cuenta? <a href="#" className="underline">Inicia sesión</a>
          </p>
        </div>
      </div>
    </div>)
  );
}