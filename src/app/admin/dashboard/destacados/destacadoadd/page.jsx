'use client'
import Link from "next/link"
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { productsContext } from "@/app/context/ProductsContext";
import { useRouter } from "next/navigation";


export default function AddCarteleraPage() {
    const {createDestacado} = useContext(productsContext)
    const { register, handleSubmit, setValue } = useForm();
    const [image, setImage] = useState([]);
    const router = useRouter()


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

      const onSubmit = handleSubmit((data) => {
        console.log(data);
        createDestacado(data)
        router.push("/admin/dashboard/destacados")
    });
  return (
    <main>
        <Link
        href="/admin/dashboard/cartelera"
        className="flex items-center gap-1 cursor-pointer"
        >
            <span>👈</span>
            <p>Volver</p>
        </Link>
        <h1 className="text-center my-3 font-bold text-xl">Agregar destacado</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-10 my-10">
            <input
            className="mx-auto"
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
            <button className="bg-orangeMedium w-max mx-auto px-32 py-2 text-white font-semibold rounded-xl shadow-md shadow-black/50" type="submit">Agregar destacado</button>
        </form>   
    </main>
  )
}
