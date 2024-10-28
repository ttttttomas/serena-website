'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeaderList() {
    const classNameHidden = "absolute flex left-[-40px] justify-center items-center top-8 px-2 py-2 flex-col border my-2 bg-orangeMedium hidden"
    const classNameVisible = "absolute flex left-[-40px] justify-center items-center top-8 px-2 py-2 flex-col border my-2 bg-orangeMedium"
    const [listFirst, setListFirst] = useState(classNameHidden)
    const [listSecond, setListSecond] = useState(classNameHidden)
    
    const handleHoverFirst = () => {
        setListFirst(classNameVisible)
    }

    const handleLeaveFirst = () => {
        setListFirst(classNameHidden)
    }

    const handleLeaveSecond = () => {
        setListSecond(classNameHidden)
    }

    const handleHoverSecond = () => {
        setListSecond(classNameVisible)
    }

    return (
        <div className="flex bg-orangeMedium py-3">
            <ul className="flex justify-around w-full font-semibold items-center text-lg text-white">
                <Link href='/' className="cursor-pointer">
                    Inicio
                </Link>
                <Link onMouseEnter={handleHoverFirst} href='/' className="cursor-pointer relative">
                    <p>Paquetes Turisticos</p>
                    <ul onMouseLeave={handleLeaveFirst} className={listFirst}>
                        <Link className="text-nowrap"  href="/">Paquetes Nacionales</Link>
                        <Link className="text-nowrap" href="/">Paquetes Internacionales</Link>
                    </ul>
                </Link>
                <Link onMouseEnter={handleHoverSecond} href='/' className="cursor-pointer relative">
                    <p>Pasajes</p>
                    <ul onMouseLeave={handleLeaveSecond} className={listSecond}>
                        <Link className="text-nowrap"  href="/">Pasajes en Bus</Link>
                        <Link className="text-nowrap" href="/">Pasajes Aéreos</Link>
                    </ul>
                </Link>
                <Link href='/' className="cursor-pointer">
                    ¿Quienes Somos?
                </Link>
                <Link href='/' className="cursor-pointer">
                    Contacto
                </Link>
            </ul>
        </div>
    )
}