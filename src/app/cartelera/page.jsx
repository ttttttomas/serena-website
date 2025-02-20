'use client'
import { productsContext } from "@app/context/ProductsContext";
import Loading from "@app/loading";
import { useEffect,useState,useContext } from "react";

export default function CarteleraPage() {
  const {getCartelera} = useContext(productsContext)
  const [cartelera, setCartelera] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
  async function loadCartelera () {
      const res = await getCartelera()
      console.log(res)
      setCartelera(res.data)
      setLoading(false)
  }
  loadCartelera()
  console.log(cartelera)
  
  }, [])
  
    return (
      <main className="p-6 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {loading ? <Loading /> : cartelera.map((cartelera) => (
          <div key={cartelera.ID} className="flex flex-col gap-5 p-4 w-64 h-auto rounded-lg shadow-md shadow-black/30">
            <img src={cartelera.image} alt={cartelera.descripcion} className="object-cover rounded-lg" />
            <p className="text-center font-bold text-xl">{cartelera.descripcion}</p>
            <p className="text-center text-orangeMedium">{cartelera.periodo}</p>
          </div>
        ))}
      </main>
    );
  };