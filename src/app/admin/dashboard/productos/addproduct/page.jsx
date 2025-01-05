import React from 'react'
import '../../../dashboard/Dashboard.css'
import { Separator } from '@/components/ui/separator'

export default function AddProductAdminPage() {
  return (
    <main className='flex flex-col mx-14 my-10 h-full'>
        <div className="flex items-center gap-1 cursor-pointer">
            <span>👈</span>
            <p>Volver</p>
        </div>
      <h1 className="text-center font-bold text-2xl">Agregar producto</h1>
        <h2 className='font-bold px-20 my-5'>Información principal</h2>


        <form className='flex flex-col gap-8 justify-center'>
            <div className='flex gap-20 justify-center'>
            <section className='flex flex-col gap-4'>
                <input placeholder='Destino' className='input shadow-md shadow-black/30 w-full' type="text" />
                <p>Fecha/s de salida</p>
                <div className='flex gap-2 items-center justify-between'>
                <input className="text-gray-400 input shadow-md w-40 shadow-black/30" type="date" />
                <span>+</span>
                </div>

                {/* <div className='flex gap-2 items-center justify-between'>
                <input className="input shadow-md w-40 shadow-black/30" type="date" />
                <span>-</span>
                </div> */}

                <Separator />
                <div className='flex items-center gap-5 justify-between'>
                <select className='text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30' id="days">
                    <option value="Noches">Dias</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <select className='text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30' id="nights">
                    <option value="Noches">Noches</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                </div>
                <select className='text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30' id="regimen">
                    <option value="Noches">Régimen</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <select className='text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30' id="transporte">
                    <option value="Noches">Transporte</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <select className='text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30' id="periodo">
                    <option value="Noches">Período</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <select className='text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30' id="type_tansporte">
                    <option value="Noches">Tipo de transporte</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </section>
            <section className='flex flex-col justify-between w-2/6'>
                <input placeholder='Subtitulo' className='input shadow-md shadow-black/30 w-full' type="text" />
                <input placeholder='Descripción' className='input shadow-md shadow-black/30 w-full' type="text" />
                <select className='input shadow-md shadow-black/30 text-gray-400 w-40' name="" id="moneda">
                    <option value="Moneda">Moneda</option>
                </select>
                <input placeholder='Precio' className='input shadow-md shadow-black/30 w-40' type="text" />
                <input placeholder='Precio adicional (opcional)' className='input shadow-md shadow-black/30 w-64' type="text" />
                <div className='flex gap-2'>
                    <input type="checkbox" id="checkbox" />
                    <p>Desde</p>
                </div>
            </section>
            <section>
                <input type="file" name="" id="" />
            </section>
            </div>
            
            <h2 className='font-bold px-20'>Información detallada</h2>
            <section className='flex justify-around gap-20 w-full'>
                <div className='flex flex-col justify-center'>
                    <div className='flex items-center mb-5 flex-col gap-4'>
                        <p>Detalles del paquete</p>
                        <input placeholder='Hotel' className='input shadow-md shadow-black/30 w-96' type="text" />
                    </div>
                    <div className='flex items-center mb-5 flex-col gap-4'>
                        <p>Incluye</p>
                        <input placeholder='Dia 1' className='input shadow-md shadow-black/30 w-96' type="text" />
                        <input placeholder='Dia 2' className='input shadow-md shadow-black/30 w-96' type="text" />
                    </div>
                    <div className='flex items-center mb-5 flex-col gap-4'>
                        <p>Observaciones</p>
                        <input placeholder='Observacion 1' className='input shadow-md shadow-black/30 w-96' type="text" />
                        <input placeholder='Observacion 2' className='input shadow-md shadow-black/30 w-96' type="text" />
                    </div>
                </div>

            <div className='flex flex-col justify-between'>
                <div className='flex items-center mb-5 flex-col gap-4'>
                    <p>Itinerario</p>
                    <input placeholder='Dia 1' className='input shadow-md shadow-black/30 w-96' type="text" />
                    <input placeholder='Dia 2' className='input shadow-md shadow-black/30 w-96' type="text" />

                </div>
                <div className='flex items-center mb-5 flex-col gap-4'>
                    <p>Tarifas</p>
                    <input placeholder='Tarifa 1' className='input shadow-md shadow-black/30 w-96' type="text" />
                    <input placeholder='Tarifa 2' className='input shadow-md shadow-black/30 w-96' type="text" />
                </div>
                    <button className='bg-orangeMedium text-white font-bold py-2 rounded-lg'>Agregar producto</button>
            </div>
            </section>
        </form>
    </main>
  )
}
