import Admin1 from "@components/ui/icons/Admin-1";
import Admin2 from "@components/ui/icons/Admin-2";
import Admin3 from "@components/ui/icons/Admin-3";
import Admin4 from "@components/ui/icons/Admin-4";

import Link from 'next/link'

export default function AdminInicio() {
return(
    <section className="">
            <div className='bg-creamBg background gap-3 my-10 p-12 flex flex-col items-center justify-center mx-auto w-[500px]'>  
                <ul className="font-bold text-xl tracking-normal">
                    <Link href="/admin/dashboard/destacados" className="flex gap-2">
                        <Admin1/>
                        <p>Destacados de página de inicio</p>
                    </Link>
                    <Link href="/admin/dashboard/productos" className="flex gap-2">
                        <Admin2/>
                        <p>Productos</p>
                    </Link>
                    <Link href="/admin/dashboard/cartelera" className="flex gap-2">
                        <Admin3/>
                        <p>Cartelera</p>
                    </Link>
                    <Link href="/admin/dashboard/destacados" className="flex gap-2">
                        <Admin4/>
                        <p>Cerrar sesión</p>
                    </Link>
                </ul>
            </div>
        </section>
)
}