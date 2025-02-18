'use client'
import Link from "next/link"
import { useContext, useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { productsContext } from "@/app/context/ProductsContext";
import { useParams, useRouter } from "next/navigation";

export default function AddCarteleraPage() {
    const {updateCartelera, getCartelById} = useContext(productsContext)
    const { register, handleSubmit, setValue } = useForm();

    const [button, setButton] = useState(false);
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState([]);

    const params = useParams();
    const router = useRouter();
    const id = params.id


    useEffect(() => {
      async function loadCartel () {
        if (id) {
          console.log("cargando producto");
          const res = await getCartelById(id);
          setLoading(false);
          console.log(res);
          setValue('descripcion', res.data.descripcion)
          setValue('periodo', res.data.periodo)
          setValue("image", res.data.image);
        }
      }
      loadCartel()
    }, [])
    

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

      const onSubmit = handleSubmit(async (data) => {
        if(id){
          console.log(data);
         await updateCartelera(id, data);
         router.push("/admin/dashboard/cartelera");
        }
    });
  return (
    <main>
       {loading && <p className='text-center font-bold mb-3'>Cargando producto...</p>}
        <Link
        href="/admin/dashboard/cartelera"
        className="flex items-center gap-1 cursor-pointer"
        >
            <span>👈</span>
            <p>Volver</p>
        </Link>
        <h1 className="text-center my-3 font-bold text-xl">Agregar cartelera</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-10 my-10">
            <div className="flex gap-20 justify-center">
            <input {...register('descripcion')} className="shadow-lg rounded-md shadow-black/30" placeholder="Descripcion" type="text" />
            <select {...register('periodo')} className="shadow-lg rounded-md shadow-black/30" placeholder='Periodo' id="">
                <option value="VERANO 2025">Verano 2025</option>
                <option value="CARNAVALES 2025">Carnavales 2025</option>
            </select>
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
            </div>
            <button className="bg-orangeMedium w-max mx-auto px-32 py-2 text-white font-semibold rounded-xl shadow-md shadow-black/50" type="submit">Modifical cartel</button>
        </form>   
    </main>
  )
}