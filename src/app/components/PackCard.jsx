'use client'
import Link from 'next/link'
import AereosIcon from './ui/icons/AereosIcon'
import DiasIcon from './ui/icons/DiasIcon'
import NochesIcon from './ui/icons/NochesIcon'
import DesayunoIcon from './ui/icons/DesayunoIcon'

import CalendarCard from './CalendarCard'

export default function PackCard() {

    return (
        <Link href="/nacionales/product" 
              className="container rounded-2xl cursor-pointer md:hover:scale-105 md:hover:shadow-orangeMedium transition-all flex flex-col xl:flex-row p-3
                gap-5 my-5 shadow-md shadow-gray-400 xl:pr-10">
               <div className='flex items-center justify-center'>
                <img
                    className="rounded-2xl"
                    width="xl:900px"
                    height="h-full"
                    src="./background-paquetes.png"
                    alt="background-destino" /> 
               </div>

               <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between flex-col xl:flex-row items-center">
                        <h6 className="text-orangeMedium text-2xl font-bold xl:mb-0 mb-3">Ruta 40 al Sur</h6>
                        <ul className="flex gap-10 font-bold xl:mb-0 mb-3">
                            <li className='flex items-center justify-center gap-2'>
                                <AereosIcon />
                                <p>Aereos</p>
                            </li>
                            <li className='flex items-center justify-center gap-2'>
                                <DiasIcon />
                                <p>14</p>
                            </li>
                            <li className='flex items-center justify-center gap-2'>
                                <NochesIcon />
                                <p>10</p>
                            </li>
                            <li className='flex items-center justify-center gap-2'>
                                <DesayunoIcon />
                                <p>DES</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <p className='font-semibold'>2 nts en Esquel - 2 nts en Perito Moreno - 2 nts en Chaltén - 2 nts en Calafate - 2 nts en Puerto Madryn</p>
                        <small>Incluye: El Bolsón + Esquel + Parque nacional Lago Pueblo + Los Antiguos + Perito Moreno + El Chaltén + El Calafate + Piedra Buena + San Julián + Puerto Madryn y Gaimán.</small>
                    </div>
                    <div className='flex flex-col mt-3 xl:mt-0 xl:flex-row items-center gap-3 justify-between'>
                        <p className='text-orangeMedium font-bold text-5xl text-nowrap'>$ 1.298.580.-</p>
                        <ul className='flex w-full xl:w-auto xl:justify-center justify-center xl:gap-5 gap-32'>
                            <CalendarCard day={24} month={"Mayo"} />
                            <CalendarCard day={12} month={"Noviembre"} />
                        </ul>
                    </div> 
               </div>

            </Link>
    )
}