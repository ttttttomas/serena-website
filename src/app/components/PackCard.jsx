'use client'
import Link from 'next/link'
import AereosIcon from './ui/icons/AereosIcon'
import DiasIcon from './ui/icons/DiasIcon'
import NochesIcon from './ui/icons/NochesIcon'
import DesayunoIcon from './ui/icons/DesayunoIcon'

import CalendarCard from './CalendarCard'
import { useContext,useEffect } from 'react'
import { productsContext } from '@/app/context/ProductsContext';;


export default function PackCard() {
    const { products, setProducts, getProducts } = useContext(productsContext);

    useEffect(() => {
      const loadProducts = async () => {
        const res = await getProducts();
        setProducts(res.data);
      }
      loadProducts()
    }, [])

    return (
        <>
        {products.map(product => (
            <Link
            key={product.ID} 
            href={product.ID}
            className="container rounded-2xl cursor-pointer md:hover:scale-105 md:hover:shadow-orangeMedium transition-all flex flex-col xl:flex-row p-3 gap-5 my-5 shadow-md shadow-gray-400 xl:pr-10">
                   <div className='flex items-center justify-center'>
                    <img
                        className="rounded-2xl"
                        width="xl:900px"
                        height="h-full"
                        src="/nacionales-background.png"
                        alt="background-destino" /> 
                   </div>
    
                   <div className="flex flex-col justify-between w-full">
                        <div className="flex justify-between flex-col xl:flex-row items-center">
                            <h6 className="text-orangeMedium text-2xl font-bold xl:mb-0 mb-3">{product.destino}</h6>
                            <ul className="flex gap-10 font-bold xl:mb-0 mb-3">
                                <li className='flex items-center justify-center gap-2'>
                                    <AereosIcon />
                                    <p>{product.transporte}</p>
                                </li>
                                <li className='flex items-center justify-center gap-2'>
                                    <DiasIcon />
                                    <p>{product.dias}</p>
                                </li>
                                <li className='flex items-center justify-center gap-2'>
                                    <NochesIcon />
                                    <p>{product.noches}</p>
                                </li>
                                <li className='flex items-center justify-center gap-2'>
                                    <DesayunoIcon />
                                    <p>{product.regimen}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <p className='font-semibold'>{product.subtitulo}</p>
                            <small>{product.descripcion}</small>
                        </div>
                        <div className='flex flex-col mt-3 xl:mt-0 xl:flex-row items-center gap-3 justify-between'>
                            <p className='text-orangeMedium font-bold text-5xl text-nowrap'>{`$ ${product.precio}.-`}</p>
                            <p>{product.precio_adicional}</p>
                            <ul className='flex w-full xl:w-auto xl:justify-center justify-center xl:gap-5 gap-32'>
                                <CalendarCard day={product.dias} month={"Mayo"} />
                                <CalendarCard day={12} month={product.subtitulo} />
                            </ul>
                        </div> 
                    </div>
            </Link>
        ))}
        </>
    )
}