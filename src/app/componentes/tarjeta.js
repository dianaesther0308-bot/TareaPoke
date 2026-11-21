"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { eliminarProducto } from "../actions/productosAction";

function Boton() {
    const [text, setTexto] = useState("Elegir Pokémon");
    const [color, setColor] = useState("bg-blue-500");

    function agregado() {
        setTexto("¡Elegido!");
        setColor("bg-green-500");
    }

    return (
        <button
            onClick={agregado}
            className={`${color} hover:opacity-90 text-white font-medium px-2 py-3 rounded-lg text-sm w-full h-full min-h-12 transition`}
        >
            {text}
        </button>
    );
}

export default function TarjetaProducto({ producto }) {
    const [cargando, setCargando] = useState(false);
    const router = useRouter();

    const handleEliminar = async () => {
        const confirmacion = window.confirm(
            `¿Estás seguro de eliminar del catálogo a "${producto.nombre}"?`
        );

        if (confirmacion) {
            setCargando(true);

            try {
                await eliminarProducto(producto.id);
                router.refresh();
            } catch (error) {
                alert("Ocurrió un error al eliminar producto");
            } finally {
                setCargando(false);
            }
        }
    };

    return (
        <article className="w-full min-w-0 h-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-5">

            {/* Imagen */}
            <div className="w-full aspect-video overflow-hidden rounded-lg mb-5">
                <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Nombre */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
                {producto.nombre}
            </h3>

            {/* Descripción */}
            <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                {producto.descripcion}
            </p>

            {/* Precio */}
            <p className="text-lg font-bold text-gray-900 mb-4">
                ${Number(producto.precio).toFixed(2)}
            </p>

            {/* Botones */}
            <div className="grid grid-cols-2 gap-2 mt-auto">

                <Boton />

                <button
                    onClick={handleEliminar}
                    disabled={cargando}
                    className="w-full h-full min-h-12 bg-red-500 hover:bg-red-600 text-white font-medium px-2 py-3 rounded-lg text-sm transition disabled:opacity-50"
                >
                    {cargando ? "Eliminando..." : "Eliminar"}
                </button>

            </div>

        </article>
    );
}


