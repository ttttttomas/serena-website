'use client'
import { useForm, useFieldArray } from "react-hook-form";

export default function ReservaForm() {

    const { register, handleSubmit, control } = useForm({
      defaultValues: {
        pasajeros: [{ nombre: "", apellido: "", dni: "" }],
        fechaSalida: "",
        fechaVuelta: "",
      },
    });
  
    const { fields, append, remove } = useFieldArray({
      control,
      name: "pasajeros",
    });
  
    const onSubmit = (data) => {
      let message = `Hola, quiero hacer una reserva.\n\nPasajeros:\n`;
  
      data.pasajeros.forEach((p, index) => {
        message += `🧑 Pasajero ${index + 1}\n- Nombre: ${p.nombre}\n- Apellido: ${p.apellido}\n- DNI: ${p.dni}\n\n`;
      });
  
      message += `📅 Fecha de salida: ${data.fechaSalida}\n📅 Fecha de vuelta: ${data.fechaVuelta}\n📞 Teléfono: ${data.telefono}\n📧 Email: ${data.email}`;
  
      const phoneNumber = "1167877298"; // Reemplaza con el número de WhatsApp destino
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
      window.open(url, "_blank");
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-6 gap-4 p-3 justify-center items-center">
        {fields.map((field, index) => (
          <div key={field.id} className="p-2 border rounded space-y-2">
            <input {...register(`pasajeros.${index}.nombre`)} placeholder="Nombre" className="px-4 py-2 text-black border rounded w-full" required />
            <input {...register(`pasajeros.${index}.apellido`)} placeholder="Apellido" className="px-4 py-2 text-black border rounded w-full" required />
            <input {...register(`pasajeros.${index}.dni`)} placeholder="DNI" className="px-4 py-2 text-black border rounded w-full" required />
            {index > 0 && (
              <button type="button" onClick={() => remove(index)} className="bg-red-500 text-white p-1 rounded w-full">
                ❌ Eliminar pasajero
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => append({ nombre: "", apellido: "", dni: "" })} className="bg-orange-500 text-white p-2 rounded">
          ➕ Agregar pasajero
        </button>
  
        <label className="block text-black">📅 Fecha de salida</label>
        <input {...register("fechaSalida")} type="date" className="p-2 text-black border rounded w-full" required />
  
        <label className="block text-black">📅 Fecha de vuelta</label>
        <input {...register("fechaVuelta")} type="date" className="p-2 text-black border rounded w-full" required />
  
        <input {...register("telefono")} type="tel" placeholder="Teléfono" className="p-2 text-black border rounded w-full" required />
        <input {...register("email")} type="email" placeholder="Correo electrónico" className="p-2 text-black border rounded w-full" required />
        
        <button type="submit" className="bg-orange-500 text-white p-2 rounded">Enviar</button>
      </form>
    );
  }