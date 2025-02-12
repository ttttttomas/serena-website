'use client'
import Logo from "./icons/Logo";
import Instagram from "./icons/Instagram";
import Whatsapp from "./icons/Whatsapp";
import AdminIcon from "./icons/AdminIcon";

import HeaderList from "./HeaderList";
import HeaderMobile from "../HeaderMobile";

import Menu from "./icons/Menu";
import Link from "next/link";

import { useContext } from 'react';
import { productsContext } from '@/app/context/ProductsContext';


export default function Header() {

    const { user } = useContext(productsContext)


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
                        <p className="text-xs md:text-sm">+54 11-5405-3025</p>
                        <p className="text-xs md:text-sm text-end">+54 11-6375-9997</p>
                        </div>
                         <Whatsapp />
                    </li>
                    <Link href={"https://www.instagram.com/serenaviajes/"} target="_blank" className="flex items-center justify-end gap-x-3">
                        <p className="md:text-sm text-xs">serenaviajes</p>
                         <Instagram />
                    </Link>
                </ul>
                {!user ? (<Link href="/admin" className="flex items-center justify-end gap-3 cursor-pointer hover:underline">
                    <AdminIcon />
                </Link>) : ''}
            </div>
        </div>

        <HeaderList />
    </header>


        <div className="bg-orangeMedium w-full h-5 md:hidden block"></div>
        {/* <HeaderMobile /> */}
        </>
)
}
