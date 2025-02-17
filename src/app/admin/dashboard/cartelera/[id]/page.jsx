'use client'
import { useParams,useRouter } from "next/navigation";


export default function CarteleraProductPage() {
    const router = useRouter()
    const params = useParams()
    const id = params.id;
    console.log(id)

  return (
        <h1>Hola </h1>
  )
}
