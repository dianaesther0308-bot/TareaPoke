"use client";

import { cerrarSesion } from "../actions/AuthAction";

export default function BotonCerrarSesion() {
    return (
        <button onClick={() => cerrarSesion()} className="rounded-lg px-3 py-2 text-red-600 transition hover:bg-red-50">
            Cerrar sesión
        </button>
    );
}