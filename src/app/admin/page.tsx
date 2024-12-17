'use client'
import { useState } from 'react';
import './admin.css'
import {useRouter} from 'next/navigation'


export default function AdminPage() {
    const router = useRouter()
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
        console.log(user)
    }
    const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
        console.log(pass)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(user === "admin" && pass === "serena11999"){
            router.push("/admin/dashboard")
        }
        else(
            alert("Usuario o contraseña incorrecta")
        )
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
                    <input onChange={handleChangeUser} value={user} placeholder='Usuario' className='px-5 py-2 shadow-sm w-full h-12 rounded-xl mx-20' type="text" />
                    <input onChange={handleChangePass} value={pass} placeholder='Contraseña' className='px-5 py-2 shadow-sm w-full h-12 rounded-xl mx-20' type="text" />
                    <button className='text-center bg-orangeMedium shadow-xl text-white rounded-xl w-full mx-auto p-2'>Ingresar</button>
                </form>
           </div>
        </section>
    )
}