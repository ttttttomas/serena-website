'use client'
import Link from 'next/link'
import DateExample from './ui/icons/DateExample'

export default function PackCard() {
    return (
        <Link href={`/nacionales/`} className="container rounded-2xl cursor-pointer hover:scale-105 hover:shadow-orangeMedium transition-all flex p-3 gap-20 my-5 shadow-md shadow-gray-400 pr-10">
               <div>
                <img
                    className="rounded-2xl"
                    width="900px"
                    src="./background-paquetes.png"
                    alt="background-destino" /> 
               </div>

               <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between items-center">
                        <h6 className="text-orangeMedium text-2xl font-bold">Ruta 40 al Sur</h6>
                        <ul className="flex gap-10 font-bold">
                            <li>Bus Cama</li>
                            <li>14</li>
                            <li>10</li>
                            <li>DES</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <p className='font-semibold'>2 nts en Esquel - 2 nts en Perito Moreno - 2 nts en Chaltén - 2 nts en Calafate - 2 nts en Puerto Madryn</p>
                        <small>Incluye: El Bolsón + Esquel + Parque nacional Lago Pueblo + Los Antiguos + Perito Moreno + El Chaltén + El Calafate + Piedra Buena + San Julián + Puerto Madryn y Gaimán.</small>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-orangeMedium font-bold text-5xl'>$ 1.298.580.-</p>
                        <ul className='flex'>
                            <DateExample />
                            <DateExample />
                        </ul>
                    </div>
               </div>

            </Link>
    )
}