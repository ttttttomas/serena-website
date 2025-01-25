'use client'
import { useContext, useState } from 'react';
import './admin.css'
import {useRouter} from 'next/navigation'
import { productsContext } from '../context/ProductsContext';


export default function AdminPage() {
    const {login} = useContext(productsContext)
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(user, pass)
    }

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
                <form onSubmit={handleSubmit} className='flex flex-col w-full gap-5 justify-center items-center'>
                    <input onChange={(e) => setUser(e.target.value)} value={user} placeholder='Usuario' className='px-5 py-2 shadow-sm w-full h-12 rounded-xl mx-20' type="text" />
                    <input onChange={(e) => setPass(e.target.value)} value={pass} placeholder='Contraseña' className='px-5 py-2 shadow-sm w-full h-12 rounded-xl mx-20' type="text" />
                    <button className='text-center bg-orangeMedium shadow-xl text-white rounded-xl w-full mx-auto p-2'>Ingresar</button>
                </form>
           </div>
        </section>
    )
}