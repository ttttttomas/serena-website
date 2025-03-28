'use client'
import { useContext, useState } from 'react';
import {useForm} from 'react-hook-form'
import {toast} from "sonner"

import 'dotenv/config';
import {useRouter} from 'next/navigation'

import './admin.css'
import { productsContext } from '@app/context/ProductsContext';

export default function AdminPage() {
    const {register, handleSubmit} = useForm()
    const {loginUser} = useContext(productsContext)
    const router = useRouter() 
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = handleSubmit (async (data) => {
        await loginUser(data.username, data.password)
        if (loginUser) {
            router.push(`/admin/dashboard`);
        }
        if (!loginUser) {
            toast.error('Usuario o contraseña incorrectos');
        }
})
    return (
        <section>
            <div className='bg-creamBg background-admin gap-3 my-10 p-12 flex flex-col items-center justify-center mx-auto w-[500px]'>  
                <div className='flex flex-col items-center gap-2 justify-center'>
                    <img 
                    className='w-32' 
                    src="logo.png" 
                    alt="logo" 
                    />
                    <p className='font-extrabold text-xl'>
                        Inicio de sesión
                    </p>
                </div>
                <form onSubmit={onSubmit} className='flex flex-col w-full gap-5 justify-center items-center'>
                    <input {...register("username")} name="username" onChange={(e) => setUsername(e.target.value)} placeholder='Usuario' className='px-5 py-2 shadow-sm w-full h-12 rounded-xl mx-20' type="text" />
                    <input {...register("password")} name="password" onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña' className='px-5 py-2 shadow-sm w-full h-12 rounded-xl mx-20' type="password" />
                    <button type="submit" className='text-center bg-orangeMedium shadow-xl text-white rounded-xl w-full mx-auto p-2'>Ingresar</button>
                </form>
           </div>
        </section>
    )
}