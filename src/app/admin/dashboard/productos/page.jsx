'use client'

import '../../dashboard/Dashboard.css'

import Link from "next/link";
import Add from "@components/ui/icons/Add";
import { useContext, useEffect, useState } from "react";
import { productsContext } from "@/app/context/ProductsContext";
import {useRouter} from 'next/navigation'
import Loading from "@app/loading";

export default function ProductsAdminPage() {
  const { products, setProducts, getProducts, deleteProduct,user,setUser } = useContext(productsContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    console.log(user);
    
      setProducts([])
        const loadProducts = async () => {
          if (user === false) {
            router.push('/admin')
          }else{
            const res = await getProducts();
            await setProducts(res.data);
            setLoading(false);
          }
        }
        loadProducts()
        
      }, [])

  const handlePut = (id) => {
    router.push(`/admin/dashboard/productos/addproduct/${id}`)
  }

  const handleDelete = (id) => {
    const response = window.confirm("¿Estás seguro de que deseas eliminar este producto?")
    if(response) {
      deleteProduct(id)
      window.location.reload()
      setUser(true)
  }else {
    return
  }
}

  return (
    <main className="flex flex-col mx-14 my-10">
      {user ? (
        <>
        <Link
        href="/admin/dashboard"
        className="flex items-center gap-1 cursor-pointer"
      >
        <span>👈</span>
        <p>Volver</p>
      </Link>
      <h1 className="text-center font-bold text-2xl">Productos</h1>
      <Link href="/admin/dashboard/productos/addproduct" className="flex items-center text-nowrap w-min my-10 gap-1 cursor-pointer">
        <Add width="60px"/>
        <p>
          Agregar producto
        </p>
      </Link>
        {loading ? <Loading/> : <table className="w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b border-gray-300">Destino</th>
              <th className="px-4 py-2 border-b border-gray-300">
                Tipo de paquete
              </th>
              <th className="px-4 py-2 border-b border-gray-300">Período</th>
              <th className="px-4 py-2 border-b border-gray-300">
                Fecha/s de salida
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.ID} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-300">
                {product.destino}
              </td>
              <td className="px-4 py-2 border-b border-gray-300">{product.paquete}</td>
              <td className="px-4 py-2 border-b border-gray-300">
                {product.periodo}
              </td>
              <td className="px-4 py-2 border-b border-gray-300">{product.date2 ? `${product.date} - ${product.date2}` : `${product.date}`}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-center">
                <button 
                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => handlePut(product.ID)}
                >
                  Modificar
                </button>
                <button 
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-900 ml-2"
                onClick={() => handleDelete(product.ID)}>
                  Eliminar
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>}
      </>) : 'Cargando...'}
      
    </main>
  );
}
