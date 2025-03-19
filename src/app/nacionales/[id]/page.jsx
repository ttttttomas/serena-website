"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { productsContext } from "@/app/context/ProductsContext";
import WhatsappForm from '../../components/WhatsappForm'
import Loading from "@app/loading";

export default function ProductNationalPage() {
  const { getProductById } = useContext(productsContext); // Solo usamos el método para obtener el producto
  const [currentProduct, setCurrentProduct] = useState(null); // Estado para el producto actual
  const params = useParams();
  const id = params.id;
  console.log(id);
  

  useEffect(() => {
    const loadProduct = async () => {
      setCurrentProduct(null); // Reseteamos el producto antes de cargar uno nuevo
      const res = await getProductById(id);
      setCurrentProduct(res.data); // Actualizamos con el producto obtenido
    };

    loadProduct();
  }, [id, getProductById]);

    console.log(currentProduct);
    

  return (
    <>
      {currentProduct ? (
        <main key={currentProduct.ID}>
          <img
            src={currentProduct.image}
            alt="background-section"
            className="w-full h-[400px] object-cover mt-1"
          />
          <section className="flex gap lg:flex-row flex-col">
            <div className="w-full mb-10">
              <ul className="flex bg-creamBg py-4 md:gap-32 text-sm md:text-base gap-3 justify-center font-semibold px-8 text-center">
                <a href="#detalles">Detalles</a>
                {currentProduct.itinerario && <a href="#itinerario">Itinerario</a>}
                {currentProduct.incluye && <a href="#incluye">Incluye</a>}
                {currentProduct.tarifas && <a href="#tarifas">Tarifas</a>}
                {currentProduct.observaciones && <a href="#observaciones">Observaciones</a>}
              </ul>
              <h2 className="text-center text-orangeMedium font-bold text-2xl tracking-wide mt-5">
                {currentProduct.destino}
              </h2>
              <h3 className="text-center text-orangeMedium font-bold text-xl tracking-wide mt-5">
                {currentProduct.subtitulo}
              </h3>
              <div className="flex flex-col gap-5">

              <div
                id="detalles"
                className="my-3 shadow-2xl rounded-3xl w-3/4 mx-auto">
                <p className="bg-creamBg py-3 shadow-lg rounded-t-lg text-start text-sm font-semibold px-4">
                  Detalles del paquete
                </p>
                <ul className="flex flex-col gap-5 px-4 py-6 text-sm font-semibold">
                  <li>{`${currentProduct.days} dias ${currentProduct.nights} noches`}</li>
                  <li>{`Tipo de transporte: ${currentProduct.transporte}`}</li>
                  <li>{`Hotel: ${currentProduct.hotel}`}</li>
                  <li>{`Régimen: ${currentProduct.regimen}`}</li>
                </ul>
              </div>

              {currentProduct.itinerario && <div
                id="itinerario"
                className="my-3 shadow-2xl rounded-3xl w-3/4 mx-auto">
                <p className="bg-creamBg py-3 shadow-lg rounded-t-lg text-start text-sm font-semibold px-4">
                  Itinerario
                </p>
                <ul className="flex flex-col gap-5 px-4 py-6 text-sm font-semibold">
                  {currentProduct.itinerario && <li>Dia 1: {currentProduct.itinerario}</li>}
                  {currentProduct.itinerario2 && <li>Día 2: {currentProduct.itinerario2}</li>}
                  {currentProduct.itinerario3 && <li>Día 3: {currentProduct.itinerario3}</li>}
                  {currentProduct.itinerario4 && <li>Día 4: {currentProduct.itinerario4}</li>}
                  {currentProduct.itinerario5 && <li>Día 5: {currentProduct.itinerario5}</li>}
                  {currentProduct.itinerario6 && <li>Día 6: {currentProduct.itinerario6}</li>}
                  {currentProduct.itinerario7 && <li>Día 7: {currentProduct.itinerario7}</li>}
                  {currentProduct.itinerario8 && <li>Día 8: {currentProduct.itinerario8}</li>}
                </ul>
              </div>}

              {currentProduct.incluye && <div
                id="incluye"
                className="my-3 shadow-2xl rounded-3xl w-3/4 mx-auto">
                <p className="bg-creamBg py-3 shadow-lg rounded-t-lg text-start text-sm font-semibold px-4">
                  Incluye
                </p>
                <ul className="flex flex-col gap-2 px-4 py-6 text-sm font-semibold">
                  {currentProduct.incluye && <li>{`${currentProduct.incluye}`}</li>}
                  {currentProduct.incluye2 && <li>{`${currentProduct.incluye2}`}</li>}
                  {currentProduct.incluye3 && <li>{`${currentProduct.incluye3}`}</li>}
                  {currentProduct.incluye4 && <li>{`${currentProduct.incluye4}`}</li>}
                </ul>
              </div>}

              {currentProduct.tarifas && <div
                id="tarifas"
                className="my-3 shadow-2xl rounded-3xl pb-2 w-3/4 mx-auto">
                <p className="bg-creamBg py-3 shadow-lg rounded-t-lg text-start text-sm font-semibold px-4">
                  Tarifas
                </p>
                <ul className="flex flex-col gap-2 px-4 pt-6 pb-4 text-sm font-semibold">
                  {currentProduct.tarifas && <li>{`${currentProduct.tarifas}`}</li>}
                  {currentProduct.tarifas2 && <li>{`${currentProduct.tarifas2}`}</li>}
                  {currentProduct.tarifas3 && <li>{`${currentProduct.tarifas3}`}</li>}
                  {currentProduct.tarifas4 && <li>{`${currentProduct.tarifas4}`}</li>}
                </ul>
              </div>}

              <div
                id="observaciones"
                className="my-3 shadow-2xl rounded-3xl pb-6 w-3/4 mx-auto">
                <p className="bg-creamBg py-3 shadow-lg rounded-t-lg text-start text-sm font-semibold px-4">
                  Observaciones
                </p>
                <ul className="flex flex-col gap-2 px-4 pt-6 text-sm font-semibold">
                  <li>{`${currentProduct.observaciones}`}</li>
                  <li>{`${currentProduct.observaciones2}`}</li>
                  <li>{`${currentProduct.observaciones3}`}</li>
                </ul>
              </div>
              </div>
            </div>

            <div className="md:w-full lg:w-1/4 flex flex-col items-center">
              <div className="bg-creamBg w-full text-center pb-8 rounded-3xl md:rounded-none md:rounded-bl-3xl">
                <h4 className="text-center font-bold pt-5 text-lg">
                  ¿Te gustaría reservar?
                </h4>
                <span className="text-sm">
                  Rellena este formulario para consultar disponibilidad.
                </span>
                <WhatsappForm />
              </div>
              <div className="flex flex-col gap-3 mt-5 rounded-3xl md:rounded-none md:rounded-l-3xl w-full bg-creamBg">
                <p className="font-bold text-center pt-5 text-xl">
                  ¿Por qué reservar con nosotros?
                </p>
                <ul className="flex pl-8 pr-6 mb-7 flex-col gap-3 text-start">
                  <li>Te brindamos asistencia y asesoría en todo tu viaje</li>
                  <li>Tenemos años de experiencia en el rubro</li>
                  <li>
                    Te brindamos asistencia médica para que viajes de manera
                    segura
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 px-8 mt-5 rounded-3xl w-full mb-10 md:rounded-none md:rounded-l-3xl bg-creamBg items-start">
                <p className="font-bold text-center mx-auto pt-5 text-xl">
                  ¿Tenes alguna duda?
                </p>
                <span className="text-center">
                  No dudes en comunicarte con nosotros por cualquier consulta
                  que tengas
                </span>
                <ul className="flex flex-col mb-7 gap-3 text-start">
                  <li>11 5405-3025</li>
                  <li>serenaviajesyturismo@gmail.com</li>
                  <li>serena viajes</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
