'use client'    
import Pagination from '@components/Pagination'
import PackCard from '@components/PackCard'

export default function Nacionales() {
  

    return (
      <main>
            <img 
            src="./nacionales-background.png"
            alt="background-section" 
            className="w-full h-80 object-cover mt-1" 
            />
            <section className="md:w-3/5 md:mx-auto mx-3">
                <h5 className="bg-opinionBg text-2xl py-1 w-full clip text-center mt-8 font-bold">
                    NUESTROS NACIONALES
                </h5>
            <PackCard />
            <div className='flex justify-center items-center mb-5'>
                <Pagination />
            </div>
            </section>
      </main>
    )
}

