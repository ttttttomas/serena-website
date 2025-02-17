'use client'
import Link from "next/link";
import axios from 'axios'
import { useState, useContext,useEffect } from "react";



export default function Destacados() {
  const [destacados, setDestacados] = useState([]);

  
  useEffect(() => {
      const loadProducts = async () => {
        const res = await axios.get('https://backend-serena-production.up.railway.app/destacados')
        console.log(res.data);
        setDestacados(res.data)
      }
      loadProducts()
    }, [])
  

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
      <p className="text-center text-green-600">Destacados subidos ✅</p>

      <div className="mt-4 mx-auto w-1/2 space-y-4">
        {destacados.map((item) => (
          <div key={item.ID} className="flex items-center gap-4 border p-2 rounded-lg">
            <img src={item.image} alt={item.id} className="w-16 h-16 rounded-lg" />
            <div className="flex-1">
              <p className="font-semibold">{item.titulo}</p>
            </div>
            <button className="text-green-600 flex items-center gap-1">
               Modificar
            </button>
            <button
              className="text-red-600 flex items-center gap-1"
              
            >
               Eliminar
            </button>
          </div>
        ))}
      <div className="mt-4 text-center">
        <Link href='/admin/dashboard/destacados/destacadoadd' className="bg-orange-500 text-white flex items-center gap-2">
          ➕ Agregar
        </Link>
      </div>

      </div>
    </div>
  );
}
