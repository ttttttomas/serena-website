export default function BoxsHome() {

    const boxs = [
        {   
            id: 1,
            img: "/elegirnos-1.png",
            text: "Tenemos mas de 20 años en el rubro por lo que podemos brindarle la experiencia necesaria a tu viaje",
        },
        {
            id: 2,
            img: "/elegirnos-2.png",
            text: "Tenemos amplia variedad de productos tanto dentro del país como en el exterior para que vivas las mejores experiencias.",
        },
        {
            id: 3,
            img: "/elegirnos-3.png",
            text: "Trabajamos en modalidad full-time por lo que te podemos brindar asesoría la gran parte del día.",
        },
        {
            id: 4,
            img: "/elegirnos-4.png",
            text: "Nos manejamos con flexibilidad a la hora de los pagos para que tengas la posibilidad de viajar sin que importen tus condiciones.",
        } 
    ]
    return (
        <div className="flex justify-center flex-wrap md:flex-nowrap items-center"> 
            {
                boxs.map((box) => {
                    return (
                        <div 
                        key={box.id} 
                        className="flex flex-col items-center gap-y-2"
                        >
                            <img 
                            src={box.img} 
                            className="w-20" 
                            alt={box.id} 
                            />
                            <p className="w-3/4 text-center">{box.text}</p>
                        </div>                    
                    )
                })
            }
        </div>
    );
}
