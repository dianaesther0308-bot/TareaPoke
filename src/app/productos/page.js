
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
  <section className="w-full max-w-6xl mx-auto px-6 py-10">
    <h2 className="text-2xl font-bold mb-7 text-center">
      CATÁLOGO POKÉMON
    </h2>

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
