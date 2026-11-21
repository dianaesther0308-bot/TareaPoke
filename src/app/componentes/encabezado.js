
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BotonCerrarSesion from "./cerrarSesion";

export default function Encabezado({ sesionIniciada }) {
  const pathname = usePathname();

  // No mostrar encabezado en la página de login
  if (pathname === "/login") {
    return null;
  }

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full">

        <Link href="/productos">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Poké<span className="text-red-500">Tienda</span>
          </h1>
        </Link>

        <nav className="flex flex-wrap items-center gap-7">
          <Link
            href="/productos"
            className="font-semibold text-gray-700 hover:text-red-500 transition-colors"
          >
            Productos
          </Link>

          <Link
            href="/contacto"
            className="font-semibold text-gray-700 hover:text-red-500 transition-colors"
          >
            Contacto
          </Link>

          <BotonCerrarSesion sesionIniciada={sesionIniciada} />
        </nav>
      </div>
    </header>
  );
}
