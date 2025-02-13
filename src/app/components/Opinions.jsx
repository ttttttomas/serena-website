'use client'
import Link from 'next/link'
import OpinionExample from './ui/icons/OpinionExample' 
import { useEffect, useState } from 'react'

export default function Opinions() {

  const reviewsURL = 'https://www.google.com/maps/place/Serena+viajes+y+turismo/@-34.6760453,-58.5658322,17z/data=!4m8!3m7!1s0x95bcc62e406b3693:0xf49145de5dabc8b7!8m2!3d-34.6760479!4d-58.5643011!9m1!1b1!16s%2Fg%2F11b77ssnxq?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D'
  const reviews = [
    {
       "author_name" : "Monica Godoy",
       "author_url" : "https://www.google.com/maps/contrib/113050944680447654380/reviews",
       "language" : "es",
       "original_language" : "es",
       "profile_photo_url" : "https://lh3.googleusercontent.com/a-/ALV-UjUxAZjdM7HyYpeiHT5_brSx2NkB8z_jyg0sUhDjmOzq2i5HywrGxg=s128-c0x00000000-cc-rp-mo",
       "rating" : 5,
       "relative_time_description" : "11 meses atrás",
       "text" : "Ayer volvimos de Villa Gesell, hotel Romadrid excelente ubicación, a media cuadra de la playa y 2 del centro. Cumplieron con todo. El hotel ⭐⭐sencillo pero muy bueno el servicio de limpieza, los empleados, la atención y la comida excelente. Agencia Serena, San Justo, súper recomendable, muy cordiales y atentos con los pasajeros, sobre todo Vane, que responde todas las dudas y consultas que hicimos.\nMis hijas también fueron a Federación en enero.\nVolvemos pronto por otro viaje!",
       "time" : 1708713878,
       "translated" : false
    },
    {
       "author_name" : "jorge antonio perez",
       "author_url" : "https://www.google.com/maps/contrib/110141570137331783465/reviews",
       "language" : "es",
       "original_language" : "es",
       "profile_photo_url" : "https://lh3.googleusercontent.com/a/ACg8ocKsWN6jlrZqgNIcZ2vVofp35bI8ngX7UxYxpRJHCYbfnU39Tw=s128-c0x00000000-cc-rp-mo-ba3",
       "rating" : 5,
       "relative_time_description" : "11 meses atrás",
       "text" : "Compre un paquete a aereo con estadia  en bariloche , fui atendido por vendedora cynthia de la sucursal san justo , muy buena atencion de principio a fin , es la segunda vez que viajo con esta agencia y no me han defraudado , las excursiones increibles.",
       "time" : 1709147783,
       "translated" : false
    },
    {
       "author_name" : "Maria Rosa Padilla",
       "author_url" : "https://www.google.com/maps/contrib/108174613403863728695/reviews",
       "language" : "es",
       "original_language" : "es",
       "profile_photo_url" : "https://lh3.googleusercontent.com/a/ACg8ocJtdNw6cEPGAjtkuMyaL3uJnvdBP94d0m4hFEI9RlKBru6-Tw=s128-c0x00000000-cc-rp-mo",
       "rating" : 5,
       "relative_time_description" : "2 meses atrás",
       "text" : "Viajamos a Salta con dos amigas, no nos tuvimos que preocupar por nada, todo perfecto, el hotel hermoso. Gracias Cinthia por tu valiosa asesoría.",
       "time" : 1732031704,
       "translated" : false
    },
    {
       "author_name" : "AVE FENIX",
       "author_url" : "https://www.google.com/maps/contrib/100536861855692787111/reviews",
       "language" : "es",
       "original_language" : "es",
       "profile_photo_url" : "https://lh3.googleusercontent.com/a/ACg8ocKRurNdbj3kaHL2x5JZsBJT-9G--vJazTB6H4L3NhSmOFzeWTs=s128-c0x00000000-cc-rp-mo",
       "rating" : 5,
       "relative_time_description" : "4 meses atrás",
       "text" : "Serena viajes es muy buena agencia me encanta me fui de vacaciones muchas veces y la verdad siempre me atendieron bien y a los lugares que siempre eleji para irme de vacaciones siempre me han recomendado muy lindos hotoles .. Vane es un amor atendiendo siempre me atetendio bien y me ayudo a organizar mi viaje y nunca tuve un problema y cintia tambien me atendio y es un amor atentendiendo tambien me encanta como atienden y que bien tienen organizado todo . Son unas genias las dos 🩷 y la paso muy bien en toda mi estadia y cada lado que fui de vacaciones la pase muy bien y me diverti mucho . Voy a seguir eligiendo Serena Viajes por que es una agencia muy buena me encanta !!!",
       "time" : 1726516332,
       "translated" : false
    },
    {
       "author_name" : "Malena Fernandez",
       "author_url" : "https://www.google.com/maps/contrib/108643942231728213436/reviews",
       "language" : "es",
       "original_language" : "es",
       "profile_photo_url" : "https://lh3.googleusercontent.com/a/ACg8ocLu4Jy0JDsc8XXIzb79JC1hDJOxiB92r5Ept8xdu1BAAicVMg=s128-c0x00000000-cc-rp-mo-ba2",
       "rating" : 5,
       "relative_time_description" : "6 meses atrás",
       "text" : "Muy conformes y contentos por las hermosas vacaciones que pasamos !! Carlos Paz hotel el condado coordinadora celeste . Una genia !  Todos muy amables . Volveremos a elegirlos.",
       "time" : 1721607251,
       "translated" : false
    }
 ]
  return (
    <section id="opinions" className='flex flex-col justify-center'>
      <h4 className='text-3xl text-center mb-20'>ALGUNAS DE NUESTRAS RESEÑAS</h4>
        <ul className='flex justify-center text-center flex-nowrap overflow-scroll'>
          {reviews.map((review, index) => (
            <Link target='_blank' href={review.author_url} key={index} className='relative md:py-32 md:p-20 py-20 mx-5'>
            <div className='absolute -top-0.5 md:left-[170px] left-[80px]'>
                <div className='w-[130px] h-[130px] flex justify-center items-center rounded-full text-white bg-orangeMedium'>
                  <p className='my-auto'>{review.author_name}</p>
                </div>
            </div>
            <div className={`flex shadow-2xl justify-center bg-opinionBg rounded-lg items-center mt-5 z-50 ${review.text.length > 260 ? 'overflow-y-scroll' : ''} max-h-52 w-80`}>
              <p className='z-40 text-center'>{review.text}</p>
            </div>
          </Link>
          ))}
        </ul>
        <div className='flex gap-2 justify-center my-5 items-center'>
        <Link target='_blank' className='underline text-xl font-semibold' href={reviewsURL}>Mas opiniones</Link>
        </div>
    </section>
  )
}
