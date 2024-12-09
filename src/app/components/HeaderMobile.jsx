'use client'
import { useContext, useState} from "react"

import Logo from "./ui/icons/Logo"
import Flecha from "./ui/icons/Flecha"

import Cruz from "./ui/icons/Cruz"

import { Separator } from "@/components/ui/separator"
import { menuContext } from "@/app/context/MenuContext";
import Link from "next/link"


export default function HeaderMobile() {
    const { isActive, setIsActive } = useContext(menuContext);

    const [isOpenPacks, setIsOpenPacks] = useState(false);
    const [isOpenPass, setIsOpenPass] = useState(false);

    return (
        <header 
        className={`${isActive ? "w-auto" : "w-0"} text-black flex transition-all duration-400 overflow-hidden z-50 flex-col fixed top-0 gap-y-2 justify-between items-center h-full bg-creamBg`}
        >
            <div>
            <div onClick={() => setIsActive(!isActive)} className="flex justify-start px-5 h-[153.5px] items-center">
            <Cruz />
            </div>
            <div className="bg-orangeMedium w-full border-none h-5"></div>
            <ul className="flex flex-col text-lg py-5 px-3 font-black gap-2">
                <Link href="/">Inicio</Link>
                <div className="my-2">
                    <Separator />
                </div>
                
                <li onClick={() =>{setIsOpenPacks(!isOpenPacks)}} 
                    className="flex items-center justify-between cursor-pointer transition-all duration-400">
                    <p>Paquetes</p>
                    <div className={`${isOpenPacks ? "rotate-180" : ""} cursor-pointer transition-all duration-200`}>
                    <Flecha />
                    </div>
                </li>

                <ul className={`${isOpenPacks ? "h-14" : "h-0"} overflow-hidden transition-all duration-400 font-medium flex flex-col gap-[0.5px]`}>
                        <Link href="/nacionales">Nacionales</Link>
                        <Separator />
                        <Link href="/internacionales">Internacionales</Link>
                    </ul>


                <div className="my-2">
                    <Separator />
                </div>

                <li onClick={() =>{setIsOpenPass(!isOpenPass)}} 
                    className="flex items-center justify-between cursor-pointer transition-all duration-400">
                    <p>Pasajes</p>
                    <div className={`${isOpenPass ? "rotate-180" : ""} cursor-pointer transition-all duration-200`}>
                    <Flecha />
                    </div>
                </li>

                <ul className={`${isOpenPass ? "h-14" : "h-0"} overflow-hidden transition-all duration-400 font-medium flex flex-col gap-[0.5px]`}>
                        <Link href="/bus">Bus</Link>
                        <Separator />
                        <Link href="/aereos">Aéreos</Link>
                    </ul>
                <div className="my-2">
                    <Separator />
                </div>
                <Link href="about-us">¿Quienes Somos?</Link>
                <div className="my-2">
                    <Separator />
                </div>
                <Link href="contact">Contacto</Link>
            </ul>
            </div> 

            <div>
            <span className="text-black italic text-sm">LEGAJO 11999</span>
            <Logo h="98px" w="102px" />           
            </div>
        </header>
    );
}

