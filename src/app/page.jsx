'use client'
import AsesoriaIcon from './components/ui/icons/Asesoria'
import MedicIcon from './components/ui/icons/Medic'
import Opinions from './components/Opinions'
import Checked from './components/ui/icons/Checked'
import { useState, useContext, useEffect } from 'react'
import { productsContext } from '@app/context/ProductsContext'
import BoxsHome from './components/ui/BoxsHome'
import axios from 'axios'
import { set } from 'react-hook-form'
import Loading from './loading'


export default function Home() {
  const {getDestacados} = useContext(productsContext)
  const [destacados, setDestacados] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
        try {
            const res = await axios.get('https://backend-serena-production.up.railway.app/destacados');
            setDestacados(res.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    loadProducts();
}, []);
  return (
    <main>
        <img 
        src="./fondo-inicio.png"
        alt="background" 
        className="h-80 w-full object-cover mt-1" 
        />
    <section className="mx-5" id="boxs">
      <h1 className="text-center mt-8 font-bold text-3xl tracking-wider">
        NUESTROS PRODUCTOS DESTACADOS
      </h1>
      <div className="flex flex-wrap justify-center gap-20 md:gap-48 mt-6 items-center">
        {loading ? <Loading /> : destacados.map((item)=> (
          <img
          key={item.ID}
          src={item.image}
          className="max-w-64 hover:scale-110 transition-all cursor-pointer object-cover rounded-xl shadow-md shadow-orangeLight" 
          alt="" 
          />
        ))}
      </div>
      <section id='elegirnos' className="flex gap-5 justify-center lg:flex-col xl:flex-row flex-col items-center mt-28">
        <div className="flex xl:w-[890px] h-auto xl:h-[400px] w-full shadow-2xl">
          <div className="grid border-r pr-20 border-black w-36 grid-cols-2 bg-creamBg">
              <AsesoriaIcon />
          </div>
          <div className='flex w-full gap-y-10 flex-col p-8'>
            <h2 className='text-4xl text-start w-3/4'>Reserva tu viaje con nuestra asesoría de primera</h2>
            <small className='text-xl'>Visualiza todos nuestros productos y servicios y comunícate con nosotros para asesorarte con el proceso.</small>
            <span>
              <Checked />
            </span>
          </div>
        </div>

                          {/* SEPARACION DE CONTENEDORES  */}

        <div className="flex xl:w-[890px] h-auto xl:h-[400px] w-full shadow-2xl">
          <div className="grid border-r pr-20 border-black w-36 grid-cols-2 bg-creamBg">
              <MedicIcon />
          </div>
          <div className='flex w-full gap-y-10 flex-col p-8'>
            <h2 className='text-4xl text-start w-3/4'>Viaja de forma segura con la cobertura médica</h2>
            <small className='text-xl'>Tenemos cobertura médica en productos seleccionados para que puedas disfrutar de tu viaje sin preocupaciones de cuidados de salud.</small>
            <span>
              <Checked />
            </span>
          </div>
        </div>
      </section>
      
    </section>

    <section id="why-us" className="bg-creamBg pb-10 mt-20 mb-10 flex flex-col">
      <h2 className='text-center text-3xl py-5'>¿POR QUÉ ELEGIRNOS PARA TUS VACACIONES?</h2>
      <BoxsHome />
    </section>

    <Opinions />
    </main>
    
  );
}
