'use client'
import OpinionExample from './ui/icons/OpinionExample' 
import { useEffect, useState } from 'react'

export default async function Opinions() {
      const [reviews, setReviews] = useState([]);
      
      const URL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJkzZrQC7GvJURt8irXd5FkfQ&fields=reviews&key=AIzaSyC7wfFthr3h58MVe70qkDTtYzxgKs03lmU"

      useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch(URL); // Cambia a tu endpoint backend
            const data = await response.json();
            console.log(data);
            
            setReviews(data);
            console.log(reviews);
        };
        fetchReviews();
    }, []);
  return (
    <section id="opinions" className='flex flex-col justify-center'>
      <h4 className='text-3xl text-center mb-20'>ALGUNAS DE NUESTRAS RESEÑAS</h4>
        <ul className='flex justify-center text-center flex-wrap'>
          <li className='relative md:p-20 py-20 mx-5'>
            <div className='absolute -top-7 md:left-[150px] left-[80px]'>
            <OpinionExample />
            </div>
            <div className='flex justify-center items-center z-50 bg-opinionBg h-52 w-80'>
              <p className='z-40 text-center px-10'>"bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla"</p>
            </div>
          </li>
          <li className='relative md:p-20 py-20 mx-5'>
            <div className='absolute -top-7 md:left-[150px] left-[80px]'>
            <OpinionExample />
            </div>
            <div className='flex justify-center items-center z-50 bg-opinionBg h-52 w-80'>
              <p className='z-40 text-center px-10'>"bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla"</p>
            </div>
          </li>
          <li className='relative md:p-20 py-20 mx-5'>
            <div className='absolute -top-7 md:left-[150px] left-[80px]'>
            <OpinionExample />
            </div>
            <div className='flex justify-center items-center z-50 bg-opinionBg h-52 w-80'>
              <p className='z-40 text-center px-10'>"bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla"</p>
            </div>
          </li>
        </ul>
    </section>
  )
}
