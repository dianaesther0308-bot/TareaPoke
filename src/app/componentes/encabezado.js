"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BotonCerrarSesion from "./cerrarSesion";

export default function Encabezado({ sesionIniciada }) {
  const pathname = usePathname();

  // No mostrar encabezado en el login
  if (pathname === "/login") {
    return null;
  }

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">

        <Link href="/productos">
          <span className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Poké<span className="text-red-500">Tienda</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-4 sm:gap-7">

          <Link
            href="/productos"
            className="text-sm sm:text-base font-semibold text-gray-700 hover:text-red-500 transition-colors"
          >
            Productos
          </Link>

          <Link
            href="/contacto"
            className="text-sm sm:text-base font-semibold text-gray-700 hover:text-red-500 transition-colors"
          >
            Contacto
          </Link>

          <BotonCerrarSesion
            sesionIniciada={sesionIniciada}
          />

        </nav>

      </div>
    </header>
  );
}