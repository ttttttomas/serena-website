import Bus from './Bus.css'

function BusPage() {
    return (
        <section id='background' className="background h-[700px] w-full">
            <h1>BUSCA TU PASAJE EN BUS</h1>
            <form className='bg-white/85'>
                <p>Origen</p>
                <select name="" id="">
                    <option value="Ingresa desde donde viajas...">Ingresa desde donde viajas...</option>
                </select>
                <p>Destino</p>
                <select name="" id="">
                    <option value="Ingresa desde donde viajas...">Ingresa desde donde viajas...</option>
                </select>
            </form>
        </section>
    );
}

export default BusPage;