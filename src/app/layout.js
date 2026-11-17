
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import RegistrarSW from "./componentes/RegistrarSW";
import BotonCerrarSesion from "./componentes/cerrarSesion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PokéTienda",
  description: "Catálogo de Pokémon de demostración",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <h1>POKÉTIENDA · Pokémon</h1>

          <nav>
            <Link href="/productos">PRODUCTOS</Link>
            <Link href="/contacto">CONTACTO</Link>
            <BotonCerrarSesion />
          </nav>
        </header>

        <RegistrarSW />

        {children}
      </body>
    </html>
  );
}
