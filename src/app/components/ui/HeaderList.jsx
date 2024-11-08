'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function HeaderList() {
    const classNameHidden = "absolute flex left-[-40px] justify-center items-center gap-y-2 top-8 px-2 py-2 flex-col border my-2 bg-orangeMedium hidden"
    const classNameVisible = "absolute flex left-[-40px] justify-center items-center gap-y-2 top-8 px-2 py-2 flex-col border my-2 bg-orangeMedium"
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
        <div className="hidden bg-orangeMedium py-3 md:flex z-50">
            <ul className="flex justify-around w-full font-semibold border-none items-center text-lg text-white">
                <Link href='/' className="cursor-pointer">
                    Inicio
                </Link>
                <div onMouseEnter={handleHoverFirst} href='/' className="cursor-pointer relative">
                    <p>Paquetes Turisticos</p>
                    <ul onMouseLeave={handleLeaveFirst} className={listFirst}>
                        <Link className="text-nowrap"  href="/nacionales">Paquetes Nacionales</Link>
                        <Separator />
                        <Link className="text-nowrap" href="/internacionales">Paquetes Internacionales</Link>
                    </ul>
                </div>
                <div onMouseEnter={handleHoverSecond} href='/' className="cursor-pointer relative">
                    <p>Pasajes</p>
                    <ul onMouseLeave={handleLeaveSecond} className={listSecond}>
                        <Link className="text-nowrap"  href="/bus">Pasajes en Bus</Link>
                        <Separator />
                        <Link className="text-nowrap" href="/aereos">Pasajes Aéreos</Link>
                    </ul>
                </div>
                <Link href='/about-us' className="cursor-pointer">
                    ¿Quienes Somos?
                </Link>
                <Link href='/contact' className="cursor-pointer">
                    Contacto
                </Link>
            </ul>
        </div>
    )
}