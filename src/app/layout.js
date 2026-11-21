
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RegistrarSW from "./componentes/RegistrarSW";
import Encabezado from "./componentes/encabezado";
import { createClient } from "./lib/supServer";

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

export default async function RootLayout({ children }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-slate-50">
        <Encabezado sesionIniciada={!!user} />

        <RegistrarSW />

        {children}
      </body>
    </html>
  );
}
