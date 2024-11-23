import Bus from './Bus.css'

function BusPage() {
    return (
        <section id='background' className=" flex justify-center md:justify-start background px-20 py-20">
            <form className='bg-white/85 flex flex-col py-10 px-8 pt-10 rounded-lg shadow-md'>
            <h1 className='font-bold text-center'>BUSCA TU PASAJE EN BUS</h1>
                <p className='text-center my-2'>Origen</p>
                <select name="" id="">
                    <option value="Ingresa desde donde viajas...">Ingresa desde donde viajas...</option>
                </select>
                <p className='text-center my-2'>Destino</p>
                <select name="" id="">
                    <option value="Ingresa desde donde viajas...">Ingresa desde donde viajas...</option>
                </select>
                <div className='flex gap-2 my-3'>
                    <input className='rounded-full' type="radio" />
                    <label htmlFor="">Sólo ida
                    </label>
                    <input className='rounded-full' type="radio" />
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
        </section>
    );
}

export default BusPage;