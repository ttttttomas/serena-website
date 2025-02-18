"use client";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";
import { productsContext } from "@/app/context/ProductsContext";

export default function Cartelera() {
 const {deleteCartelera} = useContext(productsContext)

  const router = useRouter()
  const [carteles, setCarteles] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteProduct = (id) => {
    const res = window.confirm('Seguro quieres eliminar?')
    if (res) {
      deleteCartelera(id)
    }
  }
  useEffect(() => {
      const loadProducts = async () => {
        const res = await axios.get('https://backend-serena-production.up.railway.app/cartelera')
        console.log(res.data);
        setCarteles(res.data)
        setLoading(false)
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
      <h2 className="text-center font-bold text-lg">Cartelera</h2>
      <div className="w-1/2 mx-auto my-4">
        <Link
        href='/admin/dashboard/cartelera/addcartelera'
        className="bg-orange-500 text-white w-min text-nowrap p-3 rounded-xl   flex items-center gap-2">
          Agregar Cartel
        </Link>
      </div>
      <p className="text-orangeMedium text-center">Carteles subidos</p>

      <table className="border mx-auto mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Descripción</th>
            <th className="p-2">Período</th>
            <th className="p-2">Visualización</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carteles.map((item) => (
            <tr key={item.ID} className="border-t">
              <td className="p-2">{item.descripcion}</td>
              <td className="p-2">{item.periodo}</td>
              <td className="p-2"><img src={item.image} alt={item.descripcion} className="w-16 h-16" /></td>
              <td className="p-2 flex gap-2">
                <button
                onClick={() => router.push(`/admin/dashboard/cartelera/${item.ID}`)}
                className="text-green-600 flex items-center gap-1">
                Modificar
                </button>
                <button
                onClick={() => deleteProduct(item.ID)}
                  className="text-red-600 flex items-center gap-1"
                >
                Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
