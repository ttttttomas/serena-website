"use client"

import '../../../../dashboard/Dashboard.css'

import { useForm } from "react-hook-form";
import { useContext, useState, useEffect } from "react";
import { productsContext } from "@/app/context/ProductsContext";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import Add from "@components/ui/icons/Add";
import Delete from "@components/ui/icons/Delete";
import { useParams, useRouter } from "next/navigation";
import { toast } from 'sonner';

export default function AddProductAdminPage() {
    const [image, setImage] = useState([]);
    const [button, setButton] = useState(false);
    const [loading, setLoading] = useState(true);

    const { getProductById, updateProduct } = useContext(productsContext);
    const { register, handleSubmit, setValue } = useForm();
    const params = useParams();
    const router = useRouter();

  
  useEffect(() => { 
    async function loadProduct() {
        if (id){
          console.log("cargando producto");
          const res = await getProductById(id);
            setLoading(false);
          console.log(res);
            setValue("destino", res.data.destino);
            setValue("date", res.data.date);
            setValue("date2", res.data.date2);
            setValue("days", res.data.days);
            setValue("nights", res.data.nights);
            setValue("regimen", res.data.regimen);
            setValue("transporte", res.data.transporte);
            setValue("periodo", res.data.periodo);
            setValue("paquete", res.data.paquete);
            setValue("subtitulo", res.data.subtitulo);
            setValue("descripcion", res.data.descripcion);
            setValue("moneda", res.data.moneda);
            setValue("precio", res.data.precio);
            setValue("adicional", res.data.adicional);
            setValue("desde", res.data.desde);
            setValue("image", res.data.image);
            setValue("hotel", res.data.hotel);
            setValue("incluye", res.data.incluye);
            setValue("incluye2", res.data.incluye2);
            setValue("incluye3", res.data.incluye3);
            setValue("incluye4", res.data.incluye4);
            setValue("observaciones", res.data.observaciones);
            setValue("observaciones2", res.data.observaciones2);
            setValue("observaciones3", res.data.observaciones3);
            setValue("itinerario", res.data.itinerario);
            setValue("itinerario2", res.data.itinerario2);
            setValue("itinerario3", res.data.itinerario3);
            setValue("itinerario4", res.data.itinerario4);
            setValue("itinerario5", res.data.itinerario5);
            setValue("itinerario6", res.data.itinerario6);
            setValue("itinerario7", res.data.itinerario7);
            setValue("itinerario8", res.data.itinerario8);
            setValue("tarifas", res.data.tarifas);
            setValue("tarifas2", res.data.tarifas2);
            setValue("tarifas3", res.data.tarifas3);
            setValue("tarifas4", res.data.tarifas4);
            setValue("tarifas5", res.data.tarifas5);
            setValue("image", res.data.image);  
        }
  }
  loadProduct();
}, []);
  const id = params.id;
  console.log(id);


  const handleFileChange = async (e) => {
    const imageFile = e.target.files[0];
    const url = `https://api.imgbb.com/1/upload?key=95eacfe7e3c98a0752a1c18aa38942a7&image=${imageFile.name}`;
    const data = new FormData();
    
    data.append("image", imageFile);
    console.log(data);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
      });
      const responseData = await response.json();
      setImage(responseData.data.url);
      setValue("image", responseData.data.url);
      console.log(responseData.data.url);
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmit = handleSubmit( data => {
      console.log(data);
      updateProduct(id, data);
      if(updateProduct){
        router.push("/admin/dashboard/productos")
      }

  });

  return (
    <main className="flex flex-col mx-14 my-10 h-full">
        {loading && <p className='text-center font-bold mb-3'>Cargando producto...</p>}
      <Link
        href="/admin/dashboard/productos"
        className="flex items-center gap-1 cursor-pointer">
        <span>👈</span>
        <p>Volver</p>
      </Link>
      <h1 className="text-center font-bold text-2xl">Modificar producto</h1>
      <h2 className="font-bold px-20 my-5">Información principal</h2>

      <form onSubmit={onSubmit} className="flex flex-col gap-8 justify-center">
        <div className="flex gap-20 justify-center">
          <section className="flex flex-col gap-4">
            <input
              placeholder="Destino"
              {...register("destino", { required: true })}
              className="input shadow-md shadow-black/30 w-full"
              type="text"
            />
            <p>Fecha/s de salida</p>
            <div className="flex gap-2 items-center justify-between">
              <input
                className="text-gray-400 input shadow-md w-full shadow-black/30"
                {...register("date", { required: true })}
                type="date"
              />

            </div>

            <div className={"text-gray-400 flex gap-2 items-center justify-between"}>
              <input
                className="input shadow-md w-full shadow-black/30"
                type="date"
                {...register("date2", {required: false}) }
              />
            </div>

            <Separator />

            <div className="flex items-center gap-5 justify-between">
              <select
                {...register("days", { required: true })}
                className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
                id="days">
                <option value="">Dias</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <select
                {...register("nights", { required: true })}
                className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
                id="nights">
                <option value="">Noches</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <select
              {...register("regimen", { required: true })}
              className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
              id="regimen">
              <option value="">Régimen</option>
              <option value="DES">DES</option>
              <option value="MAP">MAP</option>
              <option value="PC">PC</option>
              <option value="S/R">S/R</option>
              <option value="ALL">ALL</option>
            </select>
            <select
              {...register("transporte", { required: true })}
              className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
              id="transporte">
              <option value="">Transporte</option>
              <option value="AEREOS">AEREOS</option>
              <option value="BUS SEMICAMA">BUS SEMICAMA</option>
              <option value="BUS CAMA">BUS CAMA</option>
              <option value="BUS MIX">BUS MIX</option>
            </select>
            <select
              {...register("periodo", { required: true })}
              className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
              id="periodo">
              <option value="">Período</option>
              <option value="SALIDAS GRUPALES">SEMANA SANTA</option>
              <option value="MARZO 2025">MARZO 2025</option>
              <option value="BAJA 2025">BAJA 2025</option>
            </select>
            <select
              {...register("paquete", { required: true })}
              className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
              id="type_tansporte">
              <option value="">Tipo de paquete</option>
              <option value="NACIONAL">NACIONAL</option>
              <option value="INTERNACIONAL">INTERNACIONAL</option>
            </select>
          </section>
          <section className="flex flex-col justify-between w-2/6">
            <textarea
              placeholder="Subtitulo"
              {...register("subtitulo", { required: true })}
              className="input shadow-md h-28 shadow-black/30 w-full"
              type="text"
            />
            <textarea
              placeholder="Descripción"
              {...register("descripcion", { required: true })}
              className="input shadow-md h-28 shadow-black/30 w-full"
              type="text"
            />
            <select
              {...register("moneda", { required: true })}
              className="input shadow-md shadow-black/30 text-gray-400 w-40"
              name="">
              <option value="Pesos">Pesos</option>
              <option value="Dolares">Dolares</option>
            </select>
            <input
              {...register("precio", { required: true })}
              placeholder="Precio"
              className="input shadow-md shadow-black/30 w-40"
              type="text"
            />
            <input
              placeholder="Precio adicional (opcional)"
              {...register("adicional", { required: false })}

              className="input shadow-md shadow-black/30 w-64"
              type="text"
            />
            <div className="flex gap-2">
              <input
                {...register("desde", { required: false })}
                type="checkbox"
                id="checkbox"
              />

              <p>Desde</p>
            </div>
          </section>
          <section>
            <input
              onChange={handleFileChange}
              type="file"
            />
            {image && (
              <>
                <img
                  className="rounded-2xl mt-5 h-[450px] mx-auto"
                  src={image}
                  alt="Vista previa de la imagen"
                />
              </>
            )}
          </section>
        </div>

        <h2 className="font-bold px-20">Información detallada</h2>
        <section className="flex justify-around gap-20 w-full">
          <div className="flex flex-col justify-between">
            <div className="flex items-center mb-5 flex-col gap-4">
              <p>Detalles del paquete</p>
              <input
                {...register("hotel", { required: false })}
                placeholder="Hotel"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
            </div>
            <div className="flex items-center justify-between mb-5 flex-col gap-4">
              <p className="mb-14">Incluye</p>
              <input
                {...register("incluye", { required: false })}
                placeholder="Incluye 1"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("incluye2", { required: false })}
                placeholder="Incluye 2"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("incluye3", { required: false })}
                placeholder="Incluye 3"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              /><input
              {...register("incluye4", { required: false })}
              placeholder="Incluye 4"
              className="input shadow-md shadow-black/30 w-96"
              type="text"
            />
            </div>
            <div className="flex items-center mb-5 flex-col gap-4">
              <p className="mb-14">Observaciones</p>
              <input
                {...register("observaciones", { required: false })}
                placeholder="Observacion 1"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("observaciones2", { required: false })}
                placeholder="Observacion 2"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("observaciones3", { required: false })}
                placeholder="Observacion 3"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex items-center mb-5 flex-col gap-4">
              <p>Itinerario</p>
              <input
                {...register("itinerario", { required: false })}
                placeholder="Dia 1"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("itinerario2", { required: false })}
                placeholder="Dia 2"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("itinerario3", { required: false })}
                placeholder="Dia 3"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("itinerario4", { required: false })}
                placeholder="Dia 4"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("itinerario5", { required: false })}
                placeholder="Dia 5"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("itinerario6", { required: false })}
                placeholder="Dia 6"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("itinerario7", { required: false })}
                placeholder="Dia 7"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("itinerario8", { required: false })}
                placeholder="Dia 8"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
            </div>
            
            <div className="flex items-center mb-5 flex-col gap-4">
              <p>Tarifas</p>
              <input
                {...register("tarifas", { required: false })}
                placeholder="Tarifa 1"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("tarifas2", { required: false })}
                placeholder="Tarifa 2"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("tarifas3", { required: false })}
                placeholder="Tarifa 3"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("tarifas4", { required: false })}
                placeholder="Tarifa 4"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
                {...register("tarifas5", { required: false })}
                placeholder="Tarifa 5"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
            </div>
            <button
              type="submit"
              className="bg-orangeMedium text-white font-bold py-2 rounded-lg">
              Modificar producto
            </button>
          </div>
        </section>
      </form>
    </main>
  );
}
