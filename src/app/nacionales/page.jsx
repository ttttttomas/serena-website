'use client'    
import Link from 'next/link';
import { useContext,useEffect } from 'react'

import Pagination from '@components/Pagination'

import AereosIcon from '@/app/components/ui/icons/AereosIcon'
import DiasIcon from '@/app/components/ui/icons/DiasIcon'
import NochesIcon from '@/app/components/ui/icons/NochesIcon'
import DesayunoIcon from '@/app/components/ui/icons/DesayunoIcon'
import CalendarCard from '@/app/components/CalendarCard'

import { productsContext } from '@/app/context/ProductsContext';


export default function Nacionales() {
    const { products, setProducts, getProducts } = useContext(productsContext);

    useEffect(() => {
    setProducts([])
      const loadProducts = async () => {
        const res = await getProducts();
        await setProducts(res.data);
      }
      loadProducts()

    }, [])

    const productsWithDates = products.map((product) => {
        const meses = [
            "ENERO",
            "FEBRERO",
            "MARZO",
            "ABRIL",
            "MAYO",
            "JUNIO",
            "JULIO",
            "AGOSTO",
            "SEPTIEMBRE",
            "OCTUBRE",
            "NOVIEMBRE",
            "DICIEMBRE",
        ];
        
          // Validar que las fechas existan
        if (!product.date2) {
            console.warn("Producto con fecha 2 inválida:", product);
            return { ...product, mes2: null, dia2: null };
        }

        const [year, month, day] = product.date.split("-");
        const [year2, month2, day2] = product.date2.split("-");
        return {
            ...product,
            mes: meses[parseInt(month, 10) - 1],
            dia: day,
            mes2: meses[parseInt(month2, 10) - 1],
            dia2: day2,
        };
    });
    
    console.log(productsWithDates);
    

    return (
      <main>
            <img 
            src="./nacionales-background.png"
            alt="background-section" 
            className="w-full h-80 object-cover mt-1" 
            />
            <section className="md:w-3/5 md:mx-auto mx-5">
                <h5 className="bg-opinionBg text-2xl py-1 w-full clip text-center mt-8 font-bold">
                    VERANO 2025
                </h5>
                {productsWithDates.length === 0 ? (
                <p className='text-center font-bold my-10 text-xl'>Cargando...</p>
            ) : (
                productsWithDates.map(product => (
                    <Link
                    onClick={() => console.log(product.transporte)}
                    key={product.ID} 
                    href={`/nacionales/${product.ID}`}	
                    className="container rounded-2xl cursor-pointer md:hover:scale-105 md:hover:shadow-orangeMedium transition-all flex flex-col xl:flex-row p-3 gap-5 my-5 shadow-md shadow-gray-400 xl:pr-10">
                       <div className='flex items-center justify-center w-full'>
                            <img
                            className="rounded-2xl max-h-[290px] w-full"
                            src={product.image}
                            alt={product.destino} 
                            />     
                       </div>
        
                       <div className="flex flex-col justify-center gap-12 w-full">
                            <div className="flex justify-between flex-col xl:flex-row items-center">
                                <h6 className="text-orangeMedium text-xl font-bold xl:mb-0 mb-3">{product.destino}</h6>
                                <ul className="flex gap-4 font-bold xl:mb-0 mb-3">
                                    <li className='flex items-center justify-center gap-2'>

                                        {product.transporte === "BUS SEMICAMA" ? <AereosIcon /> : ""}
                                        {product.transporte === "BUS CAMA" ? <AereosIcon /> : ""}
                                        {product.transporte === "BUS MIX" ? <AereosIcon /> : ""}
                                        {product.transporte === "BUS AEREOS" ? <AereosIcon /> : ""}

                                        <p>{product.transporte}</p>
                                    </li>
                                    <li className='flex items-center justify-center gap-2'>
                                        <DiasIcon />
                                        <p>{product.days}</p>
                                    </li>
                                    <li className='flex items-center justify-center gap-2'>
                                        <NochesIcon />
                                        <p>{product.nights}</p>
                                    </li>
                                    <li className='flex items-center justify-center gap-2'>
                                        <DesayunoIcon />
                                        <p>{product.regimen}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-5 xl:gap-8 items-start">
                                <p className='font-semibold'>
                                    {product.descripcion}
                                    </p>
                                <small className='text-start'>
                                    {product.subtitulo}                            
                                </small>
                            </div>
                            <div className='flex flex-col mt-3 xl:mt-0 xl:flex-row items-center gap-3 justify-between'>
                                <div className='flex items-center gap-3'>
                                <p className='text-orangeMedium font-bold text-5xl text-nowrap tracking-wider'>{`$ ${product.precio}.-`}</p>
                                <p className='font-semibold tracking-wider'>{product.adicional === "" ? "" : `+ $ ${product.adicional}.-`}</p>
                                </div>
                                <ul className='flex w-full xl:w-auto xl:justify-center justify-center xl:gap-5 gap-32'>
                                    <CalendarCard day={product.dia} month={product.mes} />
                                    {product.date2 ?
                                    <div className='flex items-center justify-center md:gap-5'>
                                    <p>AL</p> 
                                    <CalendarCard day={product.dia2} month={product.mes2} />
                                    </div> 
                                     : ""}
                                </ul>
                            </div> 
                        </div>
                    </Link>
            ))
            )
            }
                <h5 className="bg-opinionBg text-2xl py-1 w-full clip text-center mt-8 font-bold">
                    CARNAVALES 2025
                </h5>
            <div className='flex justify-center items-center mb-5'>
                <Pagination />
            </div>
            </section>
      </main>
    )
}

