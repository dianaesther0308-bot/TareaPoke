
"use client";

import { useState } from "react";
import Link from "next/link";
import { iniciarSesion } from "../actions/AuthAction";

export default function LoginPage() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function manejarLogin(e) {
    e.preventDefault();

    setError("");
    setCargando(true);

    try {
      const resultado = await iniciarSesion({
        email: correo,
        password: contrasena,
      });

      if (resultado?.error) {
        setError("Correo o contraseña incorrectos.");
        setCargando(false);
      }
    } catch (err) {
      if (err?.digest?.startsWith("NEXT_REDIRECT")) {
        throw err;
      }

      console.error("Error al iniciar sesión:", err);
      setError("Ocurrió un error al iniciar sesión.");
      setCargando(false);
    }
  }

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/fondo-login.jpg')",
      }}
    >
      {/* Capa oscura sobre la imagen */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Formulario */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/40 bg-white/90 p-8 shadow-2xl backdrop-blur-md sm:p-10">

        {/* Título */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Poké<span className="text-red-500">Tienda</span>
          </h1>

          <p className="mt-3 text-gray-600">
            ¡Bienvenido de nuevo!
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Inicia sesión para continuar
          </p>
        </div>

        {/* Mensaje de error */}
        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-3 text-center text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Campos */}
        <form onSubmit={manejarLogin} className="space-y-5">

          <div>
            <label
              htmlFor="correo"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Correo electrónico
            </label>

            <input
              id="correo"
              type="email"
              placeholder="Ingresa tu correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <div>
            <label
              htmlFor="contrasena"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Contraseña
            </label>

            <input
              id="contrasena"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-full rounded-xl bg-red-500 px-5 py-3 font-bold text-white shadow-md transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {cargando ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>

        </form>

        {/* Regresar al catálogo */}
        <div className="mt-7 text-center">
          <Link
            href="/productos"
            className="text-sm font-semibold text-gray-600 transition hover:text-red-500"
          >
            ← Volver al catálogo
          </Link>
        </div>

      </div>
    </main>
  );
}
