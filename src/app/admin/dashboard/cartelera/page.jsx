"use client";
import Link from "next/link";
import { useState } from "react";


const cartelesIniciales = [
  { id: 1, descripcion: "MZA VERANO RUTA", periodo: "Verano 2025", imagen: "/cartel1.png" },
  { id: 2, descripcion: "VH VERANO RUTA", periodo: "Verano 2025", imagen: "/cartel2.png" },
  { id: 3, descripcion: "LSR VERANO RUTA", periodo: "Verano 2025", imagen: "/cartel3.png" },
];

export default function Cartelera() {
  const [carteles, setCarteles] = useState(cartelesIniciales);

  const eliminarCartel = (id) => {
    setCarteles(carteles.filter((item) => item.id !== id));
  };

  const agregarCartel = () => {
    const nuevo = {
      id: Date.now(),
      descripcion: "Nuevo Cartel",
      periodo: "Verano 2025",
      imagen: "/nuevo-cartel.png",
    };
    setCarteles([...carteles, nuevo]);
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
      <h2 className="text-center font-bold text-lg">Cartelera</h2>
      <div className="w-1/2 mx-auto my-4">
        <button onClick={agregarCartel} className="bg-orange-500 text-white flex items-center gap-2">
          ➕ Agregar Cartel
        </button>
      </div>
      <p className="text-green-600 text-center">Carteles subidos ✅</p>

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
            <tr key={item.id} className="border-t">
              <td className="p-2">{item.descripcion}</td>
              <td className="p-2">{item.periodo}</td>
              <td className="p-2"><img src={item.imagen} alt={item.descripcion} className="w-16 h-16" /></td>
              <td className="p-2 flex gap-2">
                <button className="text-green-600 flex items-center gap-1">
                Modificar
                </button>
                <button
                  className="text-red-600 flex items-center gap-1"
                  onClick={() => eliminarCartel(item.id)}
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
