'use client'
import { useContext} from "react"

import Logo from "./ui/icons/Logo"
import Flecha from "./ui/icons/Flecha"

import Cruz from "./ui/icons/Cruz"

import { Separator } from "@/components/ui/separator"
import { menuContext } from "@/app/context/MenuContext";


export default function HeaderMobile() {
    const { isActive, setIsActive } = useContext(menuContext);
   

    return (
        <header 
        className={`${isActive ? "flex" : "hidden"} transition-all flex-col fixed top-0 gap-y-2 justify-between items-center h-full bg-creamBg`}
        >
            <div>
            <div onClick={() => setIsActive(!isActive)} className="flex justify-start px-5 h-[153.5px] items-center">
            <Cruz />
            </div>
            <div className="bg-orangeMedium w-full border-none h-5"></div>
            <ul className="flex flex-col text-lg py-5 px-3 font-bold gap-2">
                <li>Inicio</li>
                <Separator />
                <li className="flex items-center justify-between">
                    <p>Paquetes</p>
                    <Flecha />               
                </li>
                <Separator />
                <li className="flex items-center justify-between">
                    <p>Pasajes</p>
                    <Flecha />
                </li>
                <Separator />
                <li>Quienes somos</li>
                <Separator />
                <li>Contacto</li>
            </ul>
            </div> 

            <div>
            <span className="text-black italic text-sm">LEGAJO 11999</span>
            <Logo h="98px" w="102px" />           
            </div>
        </header>
    );
}

