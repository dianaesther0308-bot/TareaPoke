
"use server";

import { createClient } from "../lib/supServer";
import { revalidatePath } from "next/cache";

export async function eliminarProducto(id) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("productos")
        .delete()
        .eq("id", id)
        .select("id");

    if (error) {
        console.error("Error al eliminar:", error.message);
        throw new Error("No se pudo eliminar el Pokémon");
    }

    if (!data || data.length === 0) {
        throw new Error(
            "No se eliminó el Pokémon. Revisa los permisos RLS."
        );
    }

    revalidatePath("/productos");

    return { success: true };
}
