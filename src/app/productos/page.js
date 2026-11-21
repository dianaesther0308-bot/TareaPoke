import TarjetaProducto from "../componentes/tarjeta";
import { createClient } from "../lib/supServer";

async function getProductos() {
    const supabase = await createClient();

    const { data: productos, error } = await supabase
        .from("productos")
        .select("id, nombre, descripcion, precio, imagen");

    if (error) {
        console.error("Error al obtener productos:", error.message);
        return [];
    }

    return productos;
}

export default async function ProductosPage() {
    const productos = await getProductos();

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

            {/* Título */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                CATÁLOGO POKÉMON
            </h2>

            {/* Catálogo */}
            <div className="productos-grid">
                {productos.map((item) => (
                    <TarjetaProducto
                        key={item.id}
                        producto={item}
                    />
                ))}
            </div>

        </section>
    );
}
