'use client'
import { useState } from "react"

import Logo from "./ui/icons/Logo"
import Instagram from "./ui/icons/Instagram"
import Whatsapp from "./ui/icons/Whatsapp"

export default function HeaderMobile() {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
        console.log("funciona..")
    }

    return (
        <header className={`${isActive ? "flex" : "hidden"} gap-y-2 justify-around items-center w-full`}>
            <div onClick={console.log("hola")}>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 w-10 h-10"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
            </div>
            <Logo h="98px" w="102px" />           
            <div className="flex items-center">
                <ul className="flex flex-col text-xs">
                    <li className="flex items-center gap-x-3">
                        <p>+54</p>
                        <p>11-5405-3025 / 11-6375-9997</p>
                         <Whatsapp className="w-10 h-10" />
                    </li>
                    <li className="flex items-center justify-end gap-x-3">
                        <p>serenaviajes</p>
                         <Instagram className="w-10 h-10" />
                    </li>
                </ul>
            </div>
        </header>
    );
}

