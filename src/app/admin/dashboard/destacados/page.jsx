'use client'
import Link from "next/link";
import axios from 'axios'
import { useState, useEffect, useContext } from "react";
import { productsContext } from "@/app/context/ProductsContext";


export default function Destacados() {
  const [destacados, setDestacados] = useState([]);
  const {deleteDestacado} = useContext(productsContext)
  
  useEffect(() => {
      const loadProducts = async () => {
        const res = await axios.get('https://backend-serena-production.up.railway.app/destacados')
        console.log(res.data);
        setDestacados(res.data)
      }
      loadProducts()
    }, [])
  
    const deleteProduct = (id) => {
      const res = window.confirm('Seguro quieres eliminar?')
      if (res) {
        deleteDestacado(id)
      }
    }

  return (
    
    <div className="p-4 mx-auto">
      <Link
        href="/admin/dashboard"
        className="flex items-center gap-1 cursor-pointer"
      >
        <span>👈</span>
        <p>Volver</p>
      </Link>
      <h2 className="text-center font-bold text-lg">Destacados página de inicio</h2>
      <p className="text-center text-orangeMedium">Destacados subidos </p>

      <div className="mt-4 mx-auto w-1/2 space-y-4">
        {destacados.map((item) => (
          <div key={item.ID} className="flex items-center gap-4 p-2 rounded-lg">
            <img src={item.image} alt={item.ID} className="size-72 rounded-lg" />
            <div className="flex-1">
              <p className="font-semibold">{item.titulo}</p>
            </div>
            <button
            onClick={() => deleteProduct(item.ID)}
              className="text-white bg-orangeMedium p-3 rounded-xl flex items-center gap-1"
              
            >
               Eliminar
            </button>
          </div>
        ))}
      <div className="mt-4 text-center">
        <Link href='/admin/dashboard/destacados/destacadoadd' className="bg-orange-500 w-min mx-auto text-nowrap p-3 rounded-xl text-white flex items-center gap-2">
        Agregar destacado
        </Link>
      </div>

      </div>
    </div>
  );
}
