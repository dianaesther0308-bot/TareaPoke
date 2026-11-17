
"use client";
import { guardarContacto } from "../actions/contactoAction";
import{ useEffect, useState } from "react";

export default function ContactoPage(){
const [nombre,setNombre] = useState('')
const [correo,setCorreo ] = useState('')
const [telefono,setTelefono] = useState('')
const [mensaje,setMensaje] = useState('')

useEffect(() => {
const items = JSON.parse(localStorage.getItem('Mensaje'));
if (items){
    setMensaje(items);
    console.log('Datos Recuperados',mensaje)}

},[]);

useEffect(() => {
const itemCorreo = JSON.parse(localStorage.getItem('Correo'));
if (itemCorreo){
    setCorreo(itemCorreo);
    console.log('Datos Recuperados',correo)}

},[]);

useEffect(() => {
const itemTelefono = JSON.parse(localStorage.getItem('Telefono'));
if (itemTelefono){
    setTelefono(itemTelefono);
    console.log('Datos Recuperados',telefono)}

},[]);

useEffect(() => {
localStorage.setItem('Mensaje', JSON.stringify(mensaje));

},[mensaje]);

useEffect(() =>{
    localStorage.setItem('Correo', JSON.stringify(correo));
},[correo]);

useEffect(() =>{
    localStorage.setItem('Telefono', JSON.stringify(telefono));
}, [telefono]);
 
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await guardarContacto(nombre, correo, telefono, mensaje);
        alert('Mensaje guardado correctamente');
    } catch (error) {
        console.error('Error al guardar contacto:', error);
        alert('No se pudo guardar el mensaje');
    }

    console.log('STATE ACTUALIZADO')
}

return( 
        <section className="p-6">

            <h2 className="text-2xl font-bold mb-2">
                CONTACTO POKÉMON
            </h2> 
 
            <p className="mb-6">
                ¿Tienes alguna pregunta sobre los Pokémon de nuestro catálogo? ¡Escríbenos!
            </p> 
 
            <div className="space-y-6"> 

                <div className="border p-4 rounded">

                    <h2 className="text-xl font-bold mb-4">
                        Formulario
                    </h2> 
 
                    <form onSubmit={handleSubmit} 
                    className="flex flex-col gap-3"> 

                        <label>Nombre</label> 
                        <input 
                            type="text"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                            className="border p-2 rounded"
                        /> 
 
                        <label>Correo</label> 
                        <input 
                            type="email" value={correo}
                            onChange={e => setCorreo(e.target.value)}
                            className="border p-2 rounded"
                        /> 
 
                        <label>Telefono</label> 
                        <input
                        onChange={e => setTelefono(e.target.value)} 
                            type="tel" value={telefono}
                            className="border p-2 rounded"
                        /> 
 
                        <label>Mensaje</label> 
                        <textarea value={mensaje}
                        onChange={e => setMensaje(e.target.value)}
                            className="border p-2 rounded"
                        ></textarea> 
 
                        <button className="p-2 rounded">
                            Enviar
                        </button> 

                    </form> 
                    
                </div> 

            </div> 
 
        </section> 
    ); 

};

