'use client'
import { useState } from 'react'
import Rotate from '@components/ui/icons/Rotate'

export default function FormBus() {

    const [Origen, setOrigen] = useState()
    const [Destino, setDestino] = useState()

    const changeValues = () => {
        const trade = Origen;
        setOrigen(Destino);
        setDestino(trade);
      };

    return (
        <form className='bg-white/85 flex flex-col py-10 px-8 pt-10 rounded-lg shadow-md'>
            <h1 className='font-bold text-center'>BUSCA TU PASAJE EN BUS</h1>
                <p className='text-center my-2'>Origen</p>
                <select value={Origen} onChange={(e) => setOrigen(e.target.value)}>
                    <option value="">Ingresa donde quieres viajar...</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Chile">Chile</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Uruguay">Uruguay</option>
                </select>
                <div className='relative flex flex-col items-center justify-between'>
                    <div onClick={changeValues} className='absolute right-0 top-1'>
                    <Rotate />
                    </div>
                    <p className='text-center my-2'>Destino</p>
                </div>
                <select value={Destino} onChange={(e) => setDestino(e.target.value)}>
                    <option value="">Ingresa donde quieres viajar...</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Uruguay">Uruguay</option>

                </select>
                <div className='flex gap-2 my-3'>
                    <input className='rounded-full' type="radio" name='bus' />
                    <label htmlFor="">Sólo ida
                    </label>
                    <input className='rounded-full' type="radio" name='bus' />
                    <label htmlFor="">Ida y vuelta
                    </label>
                </div>
                <p className='text-center'>Fechas</p>
                <div className='flex justify-between'>
                <input className='w-24' type="date" name="" id="" />
                <input className='w-24' type="date" name="" id="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                <p className='text-center my-2'>Pasajeros</p>
                <select className='text-center w-14 rounded-lg' name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                </div>
                <button className='bg-orangeMedium w-full text-white mt-5 rounded-lg text-xs py-2 font-bold' type="submit">BUSCAR</button>
            </form>
    )
}