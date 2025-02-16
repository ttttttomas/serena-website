'use client'
import Link from "next/link";
import { useState } from "react";


const destacadosIniciales = [
  { id: 1, imagen: "/destacado.png", titulo: "FSL DE OCTUBRE" },
  { id: 2, imagen: "/destacado.png", titulo: "FSL DE OCTUBRE" },
  { id: 3, imagen: "/destacado.png", titulo: "FSL DE OCTUBRE" },
  { id: 4, imagen: "/destacado.png", titulo: "FSL DE OCTUBRE" },
];

export default function Destacados() {
  const [destacados, setDestacados] = useState(destacadosIniciales);

  const eliminarDestacado = (id) => {
    setDestacados(destacados.filter((item) => item.id !== id));
  };

  const agregarDestacado = () => {
    const nuevo = {
      id: Date.now(),
      imagen: "/destacado.png",
      titulo: "Nuevo Destacado",
    };
    setDestacados([...destacados, nuevo]);
  };

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
          <div key={item.id} className="flex items-center gap-4 border p-2 rounded-lg">
            <img src={item.imagen} alt={item.titulo} className="w-16 h-16 rounded-lg" />
            <div className="flex-1">
              <p className="font-semibold">{item.titulo}</p>
            </div>
            <button className="text-green-600 flex items-center gap-1">
               Modificar
            </button>
            <button
              className="text-red-600 flex items-center gap-1"
              onClick={() => eliminarDestacado(item.id)}
            >
               Eliminar
            </button>
          </div>
        ))}
      <div className="mt-4 text-center">
        <button onClick={agregarDestacado} className="bg-orange-500 text-white flex items-center gap-2">
          ➕ Agregar
        </button>
      </div>

      </div>
    </div>
  );
}
