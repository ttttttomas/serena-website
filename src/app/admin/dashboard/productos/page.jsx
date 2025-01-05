import Link from "next/link"

export default function ProductsAdminPage() {
  return (
    <main className="flex flex-col mx-14 my-10">
      <div className="flex items-center gap-1 cursor-pointer">
        <span>👈</span>
        <p>Volver</p>
      </div>
      <h1 className="text-center font-bold">Productos</h1>
      <div className="flex items-center gap-1 cursor-pointer">
        <span>+</span>
        <Link href="/admin/dashboard/productos/addproduct">Agregar producto</Link>
      </div>
      <div className="overflow-x-auto">
  <table className="min-w-full border border-gray-300 text-sm text-left">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 border-b border-gray-300">Destino</th>
        <th className="px-4 py-2 border-b border-gray-300">Tipo de paquete</th>
        <th className="px-4 py-2 border-b border-gray-300">Período</th>
        <th className="px-4 py-2 border-b border-gray-300">Fecha de salida</th>
        <th className="px-4 py-2 border-b border-gray-300 text-center">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b border-gray-300">Ruta 40 al Sur</td>
        <td className="px-4 py-2 border-b border-gray-300">Nacional</td>
        <td className="px-4 py-2 border-b border-gray-300">Salidas Grupales</td>
        <td className="px-4 py-2 border-b border-gray-300">24/1 - 8/2</td>
        <td className="px-4 py-2 border-b border-gray-300 text-center">
          <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">Modificar</button>
          <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2">Eliminar</button>
        </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b border-gray-300">Ruta 40 al Sur</td>
        <td className="px-4 py-2 border-b border-gray-300">Nacional</td>
        <td className="px-4 py-2 border-b border-gray-300">Salidas Grupales</td>
        <td className="px-4 py-2 border-b border-gray-300">24/1 - 8/2</td>
        <td className="px-4 py-2 border-b border-gray-300 text-center">
          <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">Modificar</button>
          <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2">Eliminar</button>
        </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b border-gray-300">Calafate</td>
        <td className="px-4 py-2 border-b border-gray-300">Nacional</td>
        <td className="px-4 py-2 border-b border-gray-300">Salidas Grupales</td>
        <td className="px-4 py-2 border-b border-gray-300">24/1 - 8/2</td>
        <td className="px-4 py-2 border-b border-gray-300 text-center">
          <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">Modificar</button>
          <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </main>
  )
}
