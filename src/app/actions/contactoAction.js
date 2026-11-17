"use server";
import { createClient } from "../lib/supServer";

export async function guardarContacto(nombre, correo, telefono, mensaje) {
    const supabase = await createClient();

    if (!nombre?.trim() || !correo?.trim() || !mensaje?.trim()) {
        throw new Error("Faltan campos obligatorios");
    }

    const { error } = await supabase
        .from("contactos")
        .insert([
            {
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                mensaje: mensaje
            }
        ]);

    if (error) {
        console.error("Error al guardar contacto:", error.message);
        throw new Error("No se pudo guardar el mensaje");
    }
}
