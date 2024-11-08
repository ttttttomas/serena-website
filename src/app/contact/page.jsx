function Contacto() {
    return (
        <section>
        <h1 className="mt-5 mb-3 font-bold text-orangeMedium text-3xl text-center">
            Contáctanos que nos gusta pedir proyectos gratis!
        </h1>
        <div className="container mx-auto">
            <form className="bg-creamBg">
                <input type="text" />
                <input type="text" />
                <input type="email" />
                <input type="text" />
                <textarea name="" id=""></textarea>
                <button className="bg-orangeMedium text-white font-medium" type="submit">Enviar</button>
            </form>
        </div>
        </section>
    );
}

export default Contacto;