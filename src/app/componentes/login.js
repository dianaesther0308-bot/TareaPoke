"use client";

import Link from "next/link";
import { useState } from 'react'
import { iniciarSesion } from '../actions/AuthAction'

export default function Login(){
    const [form, setFrom] = useState({ email: '', password: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
    await iniciarSesion(form)
    }
    return(
        <main className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 border rounded">

                <h1 className="text-2xl font-bold">Iniciar sesión</h1>

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={form.email}
                    onChange={(e) => setFrom({...form, email: e.target.value})}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={(e) => setFrom({...form, password: e.target.value})}
                    className="border p-2 rounded"
                    required
                />

                <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                    Ingresar
                </button>

                <Link href="/" className="text-center text-blue-600">
                    Volver
                </Link>

            </form>
        </main>
    )
}
