import BoxsHome from './components/ui/BoxsHome'
import AsesoriaIcon from './components/ui/icons/Asesoria'
import MedicIcon from './components/ui/icons/Medic'
import OpinionExample from './components/ui/icons/OpinionExample'

import Checked from './components/ui/icons/Checked'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
        <img 
        src="https://s3-alpha-sig.figma.com/img/9f78/ff13/cbc61869bd986e99aa6cf434ed34dcac?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmISYb-YxEizwwY03LCguk965kt~1qC3hfrvDZtlf4ivN9KCIYAY5LF561mjDop8f6qgQ77VbyB1BG9l6iT3a4c4RWSR33Sw7hjRw8uLxC7MYi9kM8xwO4My7MyB34Dw9iB-xtJo7SN581EtO3fOcE0PEyzB6egxnLABK-pcwEl30g5gFDtV9dU6TXkfRp14JJMS3IUrHVlbSqtmNskZ13TeFnpJw9gdxQeUQIVEUNhcndF9kOuIY5ei0h0RN9LY96V8ljkwGJ42Bg4zZNkuc3a-qfdC7COk-rkG7gkB2LDKovuf35SAKy50rLRbN~o5uJhLNZc9pituth6nP49bnQ__"
        alt="background" 
        className="w-full h-80 object-cover mt-1" 
        />
    <section className="mx-16" id="boxs">
      <h1 className="text-center mt-8 font-bold text-3xl tracking-wider">
        NUESTROS PRODUCTOS DESTACADOS
      </h1>
      <div className="flex justify-between mt-6 items-center">
        <img 
        src="https://s3-alpha-sig.figma.com/img/ff4d/88ce/ab58e8d1c73be4468a5eb522a99236e3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dt29VAWHSeOMFkRt8FUG-pPTqOyNispid7iwWaBdDUSOtYwm4404Lbz~DwFuouHXJhx5O94Wrq9l6Q3aV2WT6AHsJXHy3lxE5v-YKZpMNRMn7sbdx1C7Rb9OuCLpyCmazYnvibfr0uM9mSZvSOtiSmeNRA-g2nyAtSpEXPGoWBudL6YLBRUzlJR3C2CDLj7GIwZsC79ioqEEIpwqecL9z0HPNv2BnEaFLjL-nOA75Nja3bDjhsUsB94HbixPSxJEndmS1as3P8N2NOyRwKf0OzfRIifXANGUNhj2R61jB4vprEOgkL0--aqlt6FSK0CIn9YIE7RLx37fvLqF-ys5xg__" 
        className="w-64 h-72 object-cover rounded-xl shadow-md shadow-orangeLight" 
        alt="" 
        />
        <img 
        src="https://s3-alpha-sig.figma.com/img/ff4d/88ce/ab58e8d1c73be4468a5eb522a99236e3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dt29VAWHSeOMFkRt8FUG-pPTqOyNispid7iwWaBdDUSOtYwm4404Lbz~DwFuouHXJhx5O94Wrq9l6Q3aV2WT6AHsJXHy3lxE5v-YKZpMNRMn7sbdx1C7Rb9OuCLpyCmazYnvibfr0uM9mSZvSOtiSmeNRA-g2nyAtSpEXPGoWBudL6YLBRUzlJR3C2CDLj7GIwZsC79ioqEEIpwqecL9z0HPNv2BnEaFLjL-nOA75Nja3bDjhsUsB94HbixPSxJEndmS1as3P8N2NOyRwKf0OzfRIifXANGUNhj2R61jB4vprEOgkL0--aqlt6FSK0CIn9YIE7RLx37fvLqF-ys5xg__" 
        className="w-64 h-72 object-cover rounded-xl shadow-md shadow-orangeLight" 
        alt="" 
        />
        <img 
        src="https://s3-alpha-sig.figma.com/img/ff4d/88ce/ab58e8d1c73be4468a5eb522a99236e3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dt29VAWHSeOMFkRt8FUG-pPTqOyNispid7iwWaBdDUSOtYwm4404Lbz~DwFuouHXJhx5O94Wrq9l6Q3aV2WT6AHsJXHy3lxE5v-YKZpMNRMn7sbdx1C7Rb9OuCLpyCmazYnvibfr0uM9mSZvSOtiSmeNRA-g2nyAtSpEXPGoWBudL6YLBRUzlJR3C2CDLj7GIwZsC79ioqEEIpwqecL9z0HPNv2BnEaFLjL-nOA75Nja3bDjhsUsB94HbixPSxJEndmS1as3P8N2NOyRwKf0OzfRIifXANGUNhj2R61jB4vprEOgkL0--aqlt6FSK0CIn9YIE7RLx37fvLqF-ys5xg__" 
        className="w-64 h-72 object-cover rounded-xl shadow-md shadow-orangeLight" 
        alt="" 
        />
        <img 
        src="https://s3-alpha-sig.figma.com/img/ff4d/88ce/ab58e8d1c73be4468a5eb522a99236e3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dt29VAWHSeOMFkRt8FUG-pPTqOyNispid7iwWaBdDUSOtYwm4404Lbz~DwFuouHXJhx5O94Wrq9l6Q3aV2WT6AHsJXHy3lxE5v-YKZpMNRMn7sbdx1C7Rb9OuCLpyCmazYnvibfr0uM9mSZvSOtiSmeNRA-g2nyAtSpEXPGoWBudL6YLBRUzlJR3C2CDLj7GIwZsC79ioqEEIpwqecL9z0HPNv2BnEaFLjL-nOA75Nja3bDjhsUsB94HbixPSxJEndmS1as3P8N2NOyRwKf0OzfRIifXANGUNhj2R61jB4vprEOgkL0--aqlt6FSK0CIn9YIE7RLx37fvLqF-ys5xg__" 
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
    <section id="why-us" className="bg-creamBg pb-10 mt-20 mb-10 flex flex-col">
      <h2 className='text-center text-3xl py-5'>¿POR QUÉ ELEGIRNOS PARA TUS VACACIONES?</h2>
      <BoxsHome />
    </section>
    <section id="opinions">
      <h4 className='text-3xl text-center mb-20'>ALGUNAS DE NUESTRAS RESEÑAS</h4>
        <ul className='flex justify-center text-center'>
          <li className='relative p-20'>
            <div className='absolute -top-7 left-[150px]'>
            <OpinionExample />
            </div>
            <div className='flex justify-center items-center z-50 bg-opinionBg h-52 w-80'>
              <p className='z-50 text-center px-10'>"bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla"</p>
            </div>
          </li>
          <li className='relative p-20'>
            <div className='absolute -top-7 left-[150px]'>
            <OpinionExample />
            </div>
            <div className='flex justify-center items-center z-50 bg-opinionBg h-52 w-80'>
              <p className='z-50 text-center px-10'>"bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla"</p>
            </div>
          </li>
          <li className='relative p-20'>
            <div className='absolute -top-7 left-[150px]'>
            <OpinionExample />
            </div>
            <div className='flex justify-center items-center z-50 bg-opinionBg h-52 w-80'>
              <p className='z-50 text-center px-10'>"bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla"</p>
            </div>
          </li>
        </ul>
    </section>
    </main>
    
  );
}
