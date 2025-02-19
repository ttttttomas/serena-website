'use client'
import { productsContext } from "@app/context/ProductsContext";
import { useEffect,useState,useContext } from "react";

export default function CarteleraPage() {
  const {getCartelera} = useContext(productsContext)
  const [cartelera, setCartelera] = useState([])
  useEffect(() => {
  async function loadCartelera () {
      const res = await getCartelera()
      console.log(res)
      
      // setCartelera(res.data)

  }
  loadCartelera()
  console.log(cartelera)
  
  }, [])
  
    return (
      <main className="p-6">
        {/* {cartelera.map((cartelera) => (
          <div key={cartelera.ID} className="flex flex-col gap-5 p-4 rounded-lg shadow-md shadow-black/30">
            <img src={cartelera.image} alt={cartelera.descripcion} className="w-full h-full object-cover" />
            <p className="text-center font-bold text-xl">{cartelera.descripcion}</p>
            <p className="text-center text-orangeMedium">{cartelera.periodo}</p>
          </div>
        ))} */}
      </main>
    );
  };