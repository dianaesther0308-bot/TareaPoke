
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
            className={`${color} hover:opacity-90 text-white font-medium px-3 py-2 rounded-lg text-sm w-full transition`}
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
        <section className="w-full h-full">
            <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 h-full flex flex-col">

                {/* Imagen */}
                <div className="w-full h-44 flex items-center justify-center mb-4">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>

                {/* Nombre */}
                <h3 className="text-xl font-bold mb-2">
                    {producto.nombre}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {producto.descripcion}
                </p>

                {/* Precio */}
                <p className="text-lg font-bold text-gray-900 mb-4">
                    ${Number(producto.precio).toFixed(2)}
                </p>

                {/* Botones */}
                <div className="flex gap-2 mt-auto">
                    <div className="flex-1">
                        <Boton />
                    </div>

                    <button
                        onClick={handleEliminar}
                        disabled={cargando}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-2 rounded-lg text-sm disabled:opacity-50"
                    >
                        {cargando ? "Eliminando..." : "Eliminar"}
                    </button>
                </div>

            </div>
        </section>
    );
}

    


