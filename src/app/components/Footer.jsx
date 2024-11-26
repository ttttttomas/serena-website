import Link from "next/link";
import Logo from "@components/ui/icons/Logo"
// import Iweb from "@components/ui/icons/Iweb"
import {moonDance} from "@/app/layout";
import Whatsapp from "./ui/icons/Whatsapp";
import Instagram from "./ui/icons/Instagram";
import Facebook from "./ui/icons/Facebook";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer>
      <ul className='flex justify-between items-center underline flex-wrap gap-y-5 px-10 py-5 gap-x-10 bg-orangeMedium text-white'>
        <Link href="/documentation">
          <li>● Documentación para salir del país</li>
        </Link>      
        <Link href="cancelation">
          <li>● Política de cancelación</li>
        </Link>
        <Link href="terminos">
          <li>● Términos y condiciones</li>
        </Link>
        <Link href="privacity">
          <li>● Política de privacidad y menores</li>
        </Link>
        <Link href="cartelera">
          <li>● Cartelera</li>
        </Link>
      </ul>
        <section className="">
            <div className="flex justify-between md:flex-row flex-col">
                <Link href="/" className="pt-10 pl-5 flex items-center justify-center">
                    <Logo w="200px"/>
                </Link>
                <div className="flex flex-col text-center gap-5 pt-10" id="ubicanos">
                  <h3 className="font-bold text-xl">Ubícanos</h3>
                  <p>
                    Av. Pres. Dr. Arturo Umberto Illia 2528, San Justo, Gran Buenos Aires.
                    </p>
                  <p>
                    11-4484-1782
                  </p>
                  <p>
                    serenaviajesyturismo@gmail.com
                  </p>
                </div>
                <div className="pt-10 flex text-center flex-col gap-5" id="atencion">
                <h3 className="font-bold text-xl">Horario de atención</h3>
                  <p>
                    Lunes a sábado de 09:30 hs a 19:00 hs
                    </p>
                  <p>
                    <img src="/ministerio.png" alt="" width="175px" className="mx-auto" />
                  </p>
                  <p>
                    Legajo <span className="font-bold">11999</span>
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-5 py-10 px-5 md:rounded-bl-[110px] bg-creamBg" id="contacto">
                <div className="flex items-center gap-x-3">
                        <div className="flex flex-col">
                        <p className="text-xs md:text-sm">+54 11-5405-3025</p>
                        <p className="text-xs md:text-sm text-end">+54 11-6375-9997</p>
                        </div>
                         <Whatsapp />
                    </div>
                  <p className="flex items-center gap-x-3">
                    serenaviajes <Instagram />
                  </p>
                  <p className="flex items-center gap-x-3">
                    Serena Viajes <Facebook />
                  </p>
                </div>

                </div>

                <div className="flex flex-col justify-center items-center">
                   <p className={`${moonDance.className} text-xl my-10`}>Razon social: Trappberger, Cynthia Liana - Cuit: 27-23174619-1 </p> 
                   <Separator />
                   <p className="flex justify-center items-center">
                      Desarrollado por <img src="/iWeb.png" alt="Logo" width="121"/>
                    </p> 
                </div>
        </section>
    </footer>
    );
}
