'use client'
import "../../../dashboard/Dashboard.css";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import {useContext} from "react";
import {productsContext} from "@/app/context/ProductsContext";

import Add from "@components/ui/icons/Add";
import Delete from "@components/ui/icons/Delete";

import Link from "next/link";

export default function AddProductAdminPage() {

  const { createProduct } = useContext(productsContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data, e) => {
    e.preventDefault();
    const res = await createProduct(data);
    console.log(res);
    
  })

  return (
    <main className="flex flex-col mx-14 my-10 h-full">
      <Link
        href="/admin/dashboard/productos"
        className="flex items-center gap-1 cursor-pointer"
      >
        <span>👈</span>
        <p>Volver</p>
      </Link>
      <h1 className="text-center font-bold text-2xl">Agregar producto</h1>
      <h2 className="font-bold px-20 my-5">Información principal</h2>

      <form onSubmit={onSubmit} className="flex flex-col gap-8 justify-center">
        <div className="flex gap-20 justify-center">
          <section className="flex flex-col gap-4">
            <input
              placeholder="Destino"
              {...register("destino", {required: true}) }
              className="input shadow-md shadow-black/30 w-full"
              type="text"
            />
            <p>Fecha/s de salida</p>
            <div className="flex gap-2 items-center justify-between">
              <input
                className="text-gray-400 input shadow-md w-40 shadow-black/30"
              {...register("date", {required: true}) }
                type="date"
              />
              <Add width="30px" />
            </div>

            <div className="text-gray-400 flex gap-2 items-center justify-between">
              <input
                className="input shadow-md w-40 shadow-black/30"
                type="date"
              // {...register("date", {required: false}) }
              />
              <Delete width="30px" />
            </div>

            <Separator />

            <div className="flex items-center gap-5 justify-between">
              <select
              {...register("days", {required: true}) }

                className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
                id="days"
              >
                <option value="Noches">Dias</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <select
              {...register("nights", {required: true}) }

                className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
                id="nights"
              >
                <option value="Noches">Noches</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <select
              {...register("regimen", {required: true}) }

              className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
              id="regimen"
            >
              <option value="Noches">Régimen</option>
              <option value="DES">DES</option>
              <option value="MAP">MAP</option>
              <option value="PC">PC</option>
              <option value="S/R">S/R</option>
              <option value="ALL">ALL</option>
            </select>
            <select
              {...register("transporte", {required: true}) }

              className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
              id="transporte"
            >
              <option value="Noches">Transporte</option>
              <option value="AEREOS">AEREOS</option>
              <option value="BUS_SEMICAMA">BUS SEMICAMA</option>
              <option value="BUS_CAMA">BUS CAMA</option>
              <option value="BUS_MIX">BUS MIX</option>
            </select>
            <select
              {...register("periodo", {required: true}) }

              className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
              id="periodo"
            >
              <option value="Noches">Período</option>
              <option value="VERANO_2025">VERANO 2025</option>
              <option value="SALIDAS_GRUPALES">SALIDAS GRUPALES</option>
              <option value="MARZO_2025">MARZO 2025</option>
            </select>
            <select
              {...register("paquete", {required: true}) }

              className="text-gray-400 text-start text-sm input w-full shadow-md shadow-black/30"
              id="type_tansporte"
            >
              <option value="paquete">Tipo de paquete</option>
              <option value="NACIONAL">NACIONAL</option>
              <option value="INTERNACIONAL">INTERNACIONAL</option>
            </select>
          </section>
          <section className="flex flex-col justify-between w-2/6">
            <input
              placeholder="Subtitulo"
              {...register("subtitulo", {required: true}) }

              className="input shadow-md shadow-black/30 w-full"
              type="text"
            />
            <input
              placeholder="Descripción"
              {...register("description", {required: true}) }

              className="input shadow-md shadow-black/30 w-full"
              type="text"
            />
            <select
              {...register("moneda", {required: true}) }

              className="input shadow-md shadow-black/30 text-gray-400 w-40"
              name=""
              id="moneda"
            >
              <option value="Moneda">Moneda</option>
              <option value="Pesos">Pesos</option>
              <option value="Dolares">Dolares</option>
            </select>
            <input
              {...register("price", {required: true}) }

              placeholder="Precio"
              className="input shadow-md shadow-black/30 w-40"
              type="text"
            />
            <input
              placeholder="Precio adicional (opcional)"
              className="input shadow-md shadow-black/30 w-64"
              type="text"
            />
            <div className="flex gap-2">
              <input
              {...register("price", {required: true}) }
              type="checkbox" id="checkbox" />
              
              <p>Desde</p>
            </div>
          </section>
          <section>
            <input
              {...register("img", {required: true}) }
              type="file" name="" id="" />

          </section>
        </div>

        <h2 className="font-bold px-20">Información detallada</h2>
        <section className="flex justify-around gap-20 w-full">
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-5 flex-col gap-4">
              <p>Detalles del paquete</p>
              <input
              {...register("hotel", {required: true}) }

                placeholder="Hotel"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
            </div>
            <div className="flex items-center mb-5 flex-col gap-4">
              <p>Incluye</p>
              <input
              {...register("incluye", {required: true}) }

                placeholder="Dia 1"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
              {...register("incluye", {required: true}) }

                placeholder="Dia 2"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
            </div>
            <div className="flex items-center mb-5 flex-col gap-4">
              <p>Observaciones</p>
              <input
              {...register("observaciones", {required: true}) }

                placeholder="Observacion 1"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
              {...register("observaciones", {required: true}) }

                placeholder="Observacion 2"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex items-center mb-5 flex-col gap-4">
              <p>Itinerario</p>
              <input
              {...register("itinerario", {required: true}) }

                placeholder="Dia 1"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
              {...register("itinerario", {required: true}) }

                placeholder="Dia 2"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
            </div>
            <div className="flex items-center mb-5 flex-col gap-4">
              <p>Tarifas</p>
              <input
              {...register("tarifas", {required: true}) }

                placeholder="Tarifa 1"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
              <input
              {...register("tarifas", {required: true}) }

                placeholder="Tarifa 2"
                className="input shadow-md shadow-black/30 w-96"
                type="text"
              />
            </div>
            <button type="submit" className="bg-orangeMedium text-white font-bold py-2 rounded-lg">
              Agregar producto
            </button>
          </div>
        </section>
      </form>
    </main>
  );
}
