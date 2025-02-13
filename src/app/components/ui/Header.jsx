'use client'
import Logo from "./icons/Logo";
import Instagram from "./icons/Instagram";
import Whatsapp from "./icons/Whatsapp";
import AdminIcon from "./icons/AdminIcon";

import HeaderList from "./HeaderList";
import HeaderMobile from "../HeaderMobile";

import Menu from "./icons/Menu";
import Link from "next/link";

import { useRouter } from 'next/navigation'
import { useContext, useState,useEffect } from 'react';
import { productsContext } from '@/app/context/ProductsContext';


export default function Header() {
    const { user } = useContext(productsContext)
    const [userTrue, setUserTrue] = useState(null);

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      setUserTrue(storedUser);
    }, []);

// MD ES DESKTOP


    return (
        <>
    <header className="flex w-full md:flex-col flex-row">
        <div className="flex justify-center items-center pl-5 md:hidden">
        <Menu />
        </div>
        <div className="flex w-full justify-between md:px-10 px-5 py-5">
            <div className="flex items-center gap-x-4">
                <Logo w="120" h="116" />
                <img className="w-[206px] h-[79px] md:block hidden" src="/serena-nombre.png" alt="Nombre Logo" />
                <span className={`text-black/60 font-medium text-2xl md:block hidden`} >Legajo 11999</span>
            </div>
            <div className="flex items-center  gap-x-5">
                <ul className="flex flex-col gap-y-5">
                    <li className="flex items-center gap-x-3">
                        <div className="flex flex-col">
                        <Link target="_blank" href='https://wa.me/1154053025/?text=Hola! Vengo desde la web, queria mas informacion acerca de:' className="text-xs md:text-sm">+54 11-5405-3025</Link>
                        <Link target="_blank" href='https://wa.me/1163759997/?text=Hola! Vengo desde la web, queria mas informacion acerca de:' className="text-xs md:text-sm text-end">+54 11-6375-9997</Link>
                        </div>
                         <Whatsapp />
                    </li>
                    <Link href={"https://www.instagram.com/serenaviajes/"} target="_blank" className="flex items-center justify-end gap-x-3">
                        <p className="md:text-sm text-xs">serenaviajes</p>
                         <Instagram />
                    </Link>
                </ul>
                {!userTrue & !user ? (<Link href="/admin" className="flex items-center justify-end gap-3 cursor-pointer hover:underline">
                    <AdminIcon text='Acceso' />
                </Link>) : 
                <Link href="/admin/dashboard" className="flex items-center justify-end gap-3 cursor-pointer hover:underline">
                <AdminIcon text='Panel de sistema' />
            </Link>}
            </div>
        </div>

        <HeaderList />
    </header>


        <div className="bg-orangeMedium w-full h-5 md:hidden block"></div>
        {/* <HeaderMobile /> */}
        </>
)
}
