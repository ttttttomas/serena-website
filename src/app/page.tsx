import BoxsHome from './components/ui/BoxsHome'
import AsesoriaIcon from './components/ui/icons/Asesoria'
import MedicIcon from './components/ui/icons/Medic'
import Checked from './components/ui/icons/Checked'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
        <img 
        src="https://s3-alpha-sig.figma.com/img/9f78/ff13/cbc61869bd986e99aa6cf434ed34dcac?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oh7miugC-QNxEYq5mWMYkKIxpNr9VoLDAiSsn9xTK-AOWtyAa~B8fsKV~aHBpH9d~n614ywG0OvxERgPSoYLaoTbwZdfBDiYEBy2RcQPIQEVHS~F5NqHBWiMdLjqSgYXU0T-c9gHhTVpK73EAnsQQiPKfGibK8fW0fdyuTKT7Kc0GD8lr93hrqip2JVL1uTv1Rhiw34-bFmFNOqMX4yeHThWtLP78USY5gR4PudNtncabYTQmDqW1U9RLXpJVzfHf45qFOxgcZfkfzt0BM9UT39kCshKSVO8Tm6HghVZ5KjAd-6twUPx5El46dTcMpUckCgoebSEWf79zil4YJfJkg__"
        alt="background" 
        className="w-full h-80 object-cover mt-1" 
        />
    <section className="mx-16" id="boxs">
      <h1 className="text-center mt-8 font-bold text-3xl tracking-wider">
        NUESTROS PRODUCTOS DESTACADOS
      </h1>
      <div className="flex justify-between mt-6 items-center">
        <img 
        src="https://s3-alpha-sig.figma.com/img/ff4d/88ce/ab58e8d1c73be4468a5eb522a99236e3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMAZKhkjHhb~771yycjhykrXqbkOK5GiguRnLSi5vVHsYIiGDOe3zlxP-zCC5BZq~-bgj4RzncEqK1ZE1iwqugYPb9qBQoWxhTfoFC0yz9JmrhHhpY5jSo1Uv-S0zouYXDLZIu~qSwqDyT28RMWCUDmZ1vqe3vFCpHAvinwzjRN--a-PmrT5z0idEbjda1tOPYnY8CTcFOBG1F8ihoidH4beFSUBScN0iDCUeluqTiM5OxoLSBR1IkOOfWM8lMQdmuS4i8bfnYzpAK~rUNs-jxE6A2cFkQLn979E4qBCHXZ2MMZ5m-1pQsG~Wy9Au00fm1lAd0DZci6bWBckDAmTeA__" 
        className="w-64 h-72 object-cover rounded-xl shadow-md shadow-orangeLight" 
        alt="" 
        />
        <img 
        src="https://s3-alpha-sig.figma.com/img/ff4d/88ce/ab58e8d1c73be4468a5eb522a99236e3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMAZKhkjHhb~771yycjhykrXqbkOK5GiguRnLSi5vVHsYIiGDOe3zlxP-zCC5BZq~-bgj4RzncEqK1ZE1iwqugYPb9qBQoWxhTfoFC0yz9JmrhHhpY5jSo1Uv-S0zouYXDLZIu~qSwqDyT28RMWCUDmZ1vqe3vFCpHAvinwzjRN--a-PmrT5z0idEbjda1tOPYnY8CTcFOBG1F8ihoidH4beFSUBScN0iDCUeluqTiM5OxoLSBR1IkOOfWM8lMQdmuS4i8bfnYzpAK~rUNs-jxE6A2cFkQLn979E4qBCHXZ2MMZ5m-1pQsG~Wy9Au00fm1lAd0DZci6bWBckDAmTeA__" 
        className="w-64 h-72 object-cover rounded-xl shadow-md shadow-orangeLight" 
        alt="" 
        />
        <img 
        src="https://s3-alpha-sig.figma.com/img/ff4d/88ce/ab58e8d1c73be4468a5eb522a99236e3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMAZKhkjHhb~771yycjhykrXqbkOK5GiguRnLSi5vVHsYIiGDOe3zlxP-zCC5BZq~-bgj4RzncEqK1ZE1iwqugYPb9qBQoWxhTfoFC0yz9JmrhHhpY5jSo1Uv-S0zouYXDLZIu~qSwqDyT28RMWCUDmZ1vqe3vFCpHAvinwzjRN--a-PmrT5z0idEbjda1tOPYnY8CTcFOBG1F8ihoidH4beFSUBScN0iDCUeluqTiM5OxoLSBR1IkOOfWM8lMQdmuS4i8bfnYzpAK~rUNs-jxE6A2cFkQLn979E4qBCHXZ2MMZ5m-1pQsG~Wy9Au00fm1lAd0DZci6bWBckDAmTeA__" 
        className="w-64 h-72 object-cover rounded-xl shadow-md shadow-orangeLight" 
        alt="" 
        />
        <img 
        src="https://s3-alpha-sig.figma.com/img/ff4d/88ce/ab58e8d1c73be4468a5eb522a99236e3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMAZKhkjHhb~771yycjhykrXqbkOK5GiguRnLSi5vVHsYIiGDOe3zlxP-zCC5BZq~-bgj4RzncEqK1ZE1iwqugYPb9qBQoWxhTfoFC0yz9JmrhHhpY5jSo1Uv-S0zouYXDLZIu~qSwqDyT28RMWCUDmZ1vqe3vFCpHAvinwzjRN--a-PmrT5z0idEbjda1tOPYnY8CTcFOBG1F8ihoidH4beFSUBScN0iDCUeluqTiM5OxoLSBR1IkOOfWM8lMQdmuS4i8bfnYzpAK~rUNs-jxE6A2cFkQLn979E4qBCHXZ2MMZ5m-1pQsG~Wy9Au00fm1lAd0DZci6bWBckDAmTeA__" 
        className="w-64 h-72 object-cover rounded-xl shadow-md shadow-orangeLight" 
        alt="" 
        />
      </div>
      <section className="flex gap-5 justify-center items-center mt-28">
        <div className="flex w-[890px] h-[400px] shadow-2xl">
          <div className="py-8 grid border-r border-black h-full w-36 pr-2 grid-cols-2 bg-creamBg">
              <AsesoriaIcon />
          </div>
          <div className='flex w-full gap-y-10 flex-col p-8'>
            <h2 className='text-4xl text-start w-3/4'>Reserva tu viaje con nuestra asesoría de primera</h2>
            <small className='text-xl'>Visualiza todos nuestros productos y servicios y comunícate con nosotros para asesorarte con el proceso.</small>
            <span>
              <Checked />
            </span>
          </div>
        </div>

                          {/* SEPARACION DE CONTENEDORES  */}

        <div className="flex w-[890px] h-[400px] shadow-2xl">
          <div className="py-8 grid border-r border-black h-full w-36 pr-2 grid-cols-2 bg-creamBg">
              <MedicIcon />
          </div>
          <div className='flex w-full gap-y-10 flex-col p-8'>
            <h2 className='text-4xl text-start w-3/4'>Viaja de forma segura con la cobertura médica</h2>
            <small className='text-xl'>Tenemos cobertura médica en productos seleccionados para que puedas disfrutar de tu viaje sin preocupaciones de cuidados de salud.</small>
            <span>
              <Checked />
            </span>
          </div>
        </div>
      </section>
    </section>
    <section id="why-us" className="bg-creamBg pb-10 my-20 flex flex-col">
      <h2 className='text-center text-3xl py-5'>¿POR QUÉ ELEGIRNOS PARA TUS VACACIONES?</h2>
      <BoxsHome />
    </section>
    <section id="opinions">
      <h4 className='text-3xl text-center'>ALGUNAS DE NUESTRAS RESEÑAS</h4>
      <div className='h-96 bg-black'></div>
    </section>
    </main>
    
  );
}
