'use client'

import {useForm} from 'react-hook-form'
import { useContext} from "react";
import { productsContext } from "@/app/context/ProductsContext";



export default function Contacto() {

    const { contact } = useContext(productsContext);
    console.log(contact)

    const {register, handleSubmit} = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        contact(data);
    });

    return (
        <section>
        <h1 className="mt-5 font-bold text-orangeMedium text-3xl text-center">
            Contáctanos
        </h1>
        <div className="relative bg-creamBg w-min mx-auto mt-10 mb-20 flex justify-center items-center">
            <img src="/logo.png" className="w-20 absolute -top-6  rounded-full" alt="logo" />
            <form onSubmit={onSubmit} className="mx-auto flex gap-3 pt-20 px-20 pb-10 md:pb-20 flex-col">
                <div className="flex flex-col md:flex-row gap-3 md:gap-32">
                    <div className="gap-3 flex flex-col">
                        <input               
                        {...register("nombre", { required: true })}
                         placeholder="Nombre" className="px-3 bg-white h-12 rounded-xl" type="text" />
                        <input               
                        {...register("email", { required: true })}
                         placeholder="Correo electrónico" className="px-3 bg-white h-12 rounded-xl" type="email" />
                    </div>
                    <div className="gap-3 flex flex-col">
                        <input               
                        {...register("apellido", { required: true })}
                         placeholder="Apellido" className="px-3 bg-white h-12 rounded-xl" type="text" />
                        <input               
                        {...register("telefono", { required: true })}
                         placeholder="Teléfono" className="px-3 bg-white h-12 rounded-xl" type="text" />
                    </div>
                </div>
                <textarea               
                {...register("mensaje", { required: true })}
                placeholder="Mensaje..." className="p-3 w-full h-40 rounded-xl">
                </textarea>
                <button className="bg-orangeMedium h-12 rounded-xl text-white text-xl font-medium" type="submit">Enviar</button>
            </form>
        </div>
        </section>
    )
}