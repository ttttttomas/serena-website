function AboutUs(){
    return (
        <section className="mt-1">
            <div className="relative">
        
                <div className="bg-creamBg w-full h-20"></div>
                <div className="top-20 bg-orangeMedium text-white text-end w-2/5 px-10 py-5 text-3xl font-bold rounded-xl">
                    ¿Quienes somos?
                </div>

            </div>
            <section className="flex justify-center items-center">
                <div className="font-normal text-2xl w-1/2 h-full">
                    <p className="h-full mx-80">
                    Somos una empresa de viajes y turismo que esta en el mercado hace muchos años y  que destina todo su tiempo a satisfacer las necesidades y consultas de nuestros clientes, asegurándoles unas vacaciones de primera con nuestros productos.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                <div className="bg-orangeMedium w-full h-20"></div>
                    <img
                        className="rounded-2xl"
                        width="700px"
                        src="https://s3-alpha-sig.figma.com/img/d2c1/7533/5d6e46ece60f9ec2a271230d5097cc93?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=phuLL6qTVI7Dnl-7iAg99hFYBwSdY7eS-nlFnLZYlb9RNnnaOriltsohefsBzw3TmzAb6kVmPpkl~~IURVFXIcUIpvSjkBorvW4UdFc8f49orfpT1V9rG85u12Dik3hFTjAipBCt2m0gBIHHk6JiGFznT099FKG7zsPEuceKpgzPf37mbFEtmCPUh~1TgQfF21zX7FwNsArW1ZVWd7F4noTq2BgPzJ2WyQp1xSm45F7bf4fdmmtyd98fI6sXB6rQ4Qgb8IBZvOWlse3kghTzxYA5ESMaGJhnqqaPJ0iWAAKuwMtoLtAtOrTx8puDAUzzV7tIoLtT-5c0ZTZRr2PK~g__"
                        alt="" 
                    />
                </div>
            </section>
            <div className="my-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.1436698179777!2d-58.56454631707703!3d-34.67617970558415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc62e4022e425%3A0xf1440b1fec96f1f8!2sAv.%20Pres.%20Dr.%20Arturo%20Umberto%20Illia%202528%2C%20B1754IUP%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1731075168645!5m2!1ses-419!2sar" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
}

export default AboutUs;