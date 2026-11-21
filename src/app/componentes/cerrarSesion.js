
"use client";

import { useState } from "react";
import Link from "next/link";
import { cerrarSesion } from "../actions/AuthAction";

export default function BotonCerrarSesion({ sesionIniciada }) {
    const [cargando, setCargando] = useState(false);

    async function salir() {
        setCargando(true);

        try {
            const resultado = await cerrarSesion();

            if (resultado?.error) {
                alert(resultado.error);
                setCargando(false);
            }
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            setCargando(false);
        }
    }

    if (!sesionIniciada) {
        return (
            <Link
                href="/login"
                className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white transition-colors hover:bg-red-600"
            >
                Iniciar sesión
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={salir}
            disabled={cargando}
            className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white transition-colors hover:bg-red-600 disabled:opacity-50"
        >
            {cargando ? "Cerrando..." : "Cerrar sesión"}
        </button>
    );
}
