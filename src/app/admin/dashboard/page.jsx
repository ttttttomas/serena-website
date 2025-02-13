'use client'
import Admin1 from "@components/ui/icons/Admin-1";
import Admin2 from "@components/ui/icons/Admin-2";
import Admin3 from "@components/ui/icons/Admin-3";
import Admin4 from "@components/ui/icons/Admin-4";

import { useRouter } from 'next/navigation'
import { useContext } from 'react';

import { productsContext } from '@/app/context/ProductsContext';

import './Dashboard.css'

import Link from 'next/link'
import { useEffect } from "react";

export default function AdminDashboard() {
    const router = useRouter()
    const { user, handleLogout } = useContext(productsContext)
    
    useEffect(() => {
        const userTrue = localStorage.getItem('user')
        console.log(user, userTrue);
        
        function isUserTrue () {
            if (user === true) {
                router.push('/admin/dashboard')
            }else{
                router.push('/admin')
            }
        }
        isUserTrue()
    }
    , [])

return( <section className="">
    {user ? (<div className='bg-creamBg background gap-3 my-10 p-12 flex flex-col items-center justify-center border mx-auto w-[500px]'>  
        <ul className="font-bold text-xl tracking-normal flex flex-col items-center justify-center gap-2">
            <Link href="/admin/dashboard/destacados" className="flex gap-3 items-center justify-center">
                <Admin1/>
                <p>Destacados de página de inicio</p>
            </Link>
            <Link href="/admin/dashboard/productos" className="flex gap-3 items-center justify-center">
                <Admin2/>
                <p>Productos</p>
            </Link>
            <Link href="/admin/dashboard/cartelera" className="flex gap-3 items-center justify-center">
                <Admin3/>
                <p>Cartelera</p>
            </Link>
            <Link href="/admin" onClick={handleLogout} className="flex gap-3 items-center justify-center">
                <Admin4/>
                <p>Cerrar sesión</p>
            </Link>
        </ul>
    </div>) : <p className="text-center my-3 font-bold">Cargando...</p>}
</section> 
 )
}