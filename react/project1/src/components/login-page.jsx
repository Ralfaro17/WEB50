'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Link } from "react-router-dom"

export function LoginPage() {
  return (
    (<div className="flex min-h-screen bg-blue-600 relative overflow-hidden">
      <div className="hidden md:block md:w-1/2">
        
      </div>
      <div
        className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
      <div
        className="flex flex-col justify-center w-full px-4 md:w-1/2 md:px-8 lg:px-12 relative z-10">
        <div className="w-full max-w-md mx-auto space-y-6">
          <div className="space-y-2 text-center">
            <h1
              className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              NicaWay
            </h1>
            <p className="text-white/90 max-w-[600px] text-lg sm:text-xl">
              Tu guía perfecta para el paraíso nicaragüense.
            </p>
          </div>
          <div className="space-y-4">
            <Input className="bg-white/90" placeholder="Nombre de usuario" type="text" />
            <Input className="bg-white/90" placeholder="Contraseña" type="password" />
            <Button className="w-full bg-white text-blue-600 hover:bg-white/90">
              Iniciar sesión
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-blue-600 px-2 text-white">o</span>
            </div>
          </div>
          <Button
            className="w-full bg-black text-white hover:bg-black/90"
            variant="outline">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            Inicia sesión con Google
          </Button>
          <p className="text-sm text-center text-white">
            ¿No tienes una cuenta?{" "}
            <Link className="underline" to="/">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>)
  );
}