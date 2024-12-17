export default function ProductNationalPage() {
  return (
    <main>
        <img 
        src="/nacionales-background.png" 
        alt="background-section" 
        className="w-full h-[400px] object-cover mt-1" 
        />
        <section className="flex">
            <div className="w-full mb-10">
                <ul className="flex bg-creamBg py-4 gap-32 justify-center font-bold px-8 text-center">
                    <li>Detalles</li>
                    <li>Itinerario</li>
                    <li>Incluye</li>
                    <li>Tarifas</li>
                    <li>Observaciones</li>
                </ul>
                <h2 className="text-center text-orangeMedium font-bold text-xl tracking-wide mt-5">MONTEGO BAY</h2>

                <div className="my-3 shadow-2xl rounded-3xl w-3/4 mx-auto">
                    <p className="bg-creamBg py-3 shadow-lg rounded-t-lg text-start text-sm font-semibold px-4">
                        Detalles del paquete
                    </p>
                    <ul className="flex flex-col gap-5 px-4 py-6 text-sm font-semibold">
                        <li>08 días 07 noches</li>
                        <li>Tipo de transporte: Aéreo</li>
                        <li>Hotel Iberostar Waves Rose Hall Beach</li>
                        <li>Régimen: All inclusive</li>
                    </ul>
                </div>

                <div className="my-3 shadow-2xl rounded-3xl w-3/4 mx-auto">
                    <p className="bg-creamBg py-3 shadow-lg rounded-t-lg text-start text-sm font-semibold px-4">
                        Itinerario
                    </p>
                    <ul className="flex flex-col gap-5 px-4 py-6 text-sm font-semibold">
                        <li>Día 1:</li>
                        <li>Día 2:</li>
                        <li>Día 3:</li>
                        <li>Día 4:</li>
                        <li>Día 5:</li>
                        <li>Día 6:</li>
                        <li>Día 7:</li>
                        <li>Día 8:</li>
                    </ul>
                </div>

                <div className="my-3 shadow-2xl rounded-3xl w-3/4 mx-auto">
                    <p className="bg-creamBg py-3 shadow-lg rounded-t-lg text-start text-sm font-semibold px-4">
                        Incluye
                    </p>
                    <ul className="flex flex-col gap-5 px-4 py-6 text-sm font-semibold">
                        <li>Ticket aéreo ida y vuelta con Latam Airlines</li>
                        <li>07 noches de alojamiento en Punta Cana, en el hotel Iberostar Waves Rose Hall Beach con All Inclusive.</li>
                        <li>Traslados IN/OUT en servicio regular.</li>
                        <li>Asistencia médica al viajero con Avril Infinity Protect 25.</li>
                    </ul>
                </div>

                <div className="my-3 shadow-2xl rounded-3xl pb-6 w-3/4 mx-auto">
                    <p className="bg-creamBg py-3 shadow-lg rounded-t-lg text-start text-sm font-semibold px-4">
                        Tarifas
                    </p>
                    <ul className="flex flex-col gap-5 px-4 pt-6 pb-8 text-sm font-semibold">
                        <li>Single - U$D 2.658.- + U$D 320 Impuestos</li>
                        <li>Doble - U$D 1.799.- + U$D 320 Impuestos</li>
                        <li>Triple - U$D 1.669.- + U$D 320 Impuestos</li>
                        <li>Child - U$D 1.201.- + U$D 600 Impuestos</li>
                    </ul>
                    <span className="px-4 font-semibold">No incluye gastos administrativos.</span>
                </div>

                <div className="my-3 shadow-2xl rounded-3xl pb-6 w-3/4 mx-auto">
                    <p className="bg-creamBg py-3 shadow-lg rounded-t-lg text-start text-sm font-semibold px-4">
                        Observaciones
                    </p>
                    <ul className="flex flex-col px-4 pt-6 text-sm font-semibold">
                        <li>Tarifas expresadas en dolares americanos, sujetas a modificaciones sin previo aviso segun disponibilidad al momento de confirmar la reserva.</li>
                        <p className="mt-4">No incluye</p>
                        <ul className="mt-2">
                            <li>IVA 21%</li>
                            <li>GASTOS ADMINISTRATIVOS 2.2%</li>
                            <li>5% DE RETENCION POR PAGO EN EFECTIVO O DEPOSITO BANCARIO</li>
                        </ul>
                    </ul>
                </div>

            </div>


            <div className="w-1/4 flex flex-col items-center">
                <div className="bg-creamBg w-full text-center pb-8 rounded-bl-3xl">
                <h4 className="text-center font-bold pt-5 text-lg">
                    ¿Te gustaría reservar?
                </h4>
                <span className="text-xs">Rellena este formulario para consultar disponibilidad.</span>
                <form className="flex flex-col mt-6 gap-4 justify-center items-center" action="">
                    <input placeholder="Nombre" className="w-64 p-2 shadow-lg rounded-lg" required type="text" />
                    <input placeholder="Apellido" className="w-64 p-2 shadow-lg rounded-lg" required type="text" />
                    <input placeholder="DNI" className="w-64 p-2 shadow-lg rounded-lg" required type="text" />
                    <input className="w-64 p-2 shadow-lg rounded-lg" required type="date" />
                    <input placeholder="Cantidad de pasajeros" className="w-64 p-2 shadow-lg rounded-lg" required type="number" />
                    <input placeholder="Teléfono" className="w-64 p-2 shadow-lg rounded-lg" required type="text" />
                    <input placeholder="Correo electrónico" className="w-64 p-2 shadow-lg rounded-lg" required type="email" />
                    <button type="submit" className="bg-orange-500 text-white w-64 rounded-lg py-2">Enviar</button>
                </form>
                </div>
                <div className="flex flex-col gap-3 mt-5 rounded-l-3xl w-full bg-creamBg">
                    <p className="font-bold text-center pt-5 text-xl">¿Por qué reservar con nosotros?</p>
                    <ul className="flex pl-8 pr-6 mb-7 flex-col gap-3 text-start">
                        <li>Te brindamos asistencia y asesoría en todo tu viaje</li>
                        <li>Tenemos años de experiencia en el rubro</li>
                        <li>Te brindamos asistencia médica para que viajes de manera segura</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3 mt-5 rounded-l-3xl bg-creamBg items-center">
                    <p className="font-bold text-center pt-5 text-xl">¿Tenes alguna duda?</p>
                    <span className=" text-center">No dudes en comunicarte con nosotros por cualquier consulta que tengas</span>
                    <ul className="flex flex-col mb-7 gap-3 text-start">
                        <li>11 5405-3025</li>
                        <li>serenaviajesyturismo@gmail.com</li>
                        <li>serena viajes</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
  )
}
