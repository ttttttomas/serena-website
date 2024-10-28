import { text } from "stream/consumers";

export default function BoxsHome() {

    const boxs = [
        {   
            id: 1,
            img: "/logo.png",
            text: "Tenemos mas de 20 años en el rubro por lo que podemos brindarle la experiencia necesaria a tu viaje",
        },
        {
            id: 2,
            img: "/logo.png",
            text: "Tenemos amplia variedad de productos tanto dentro del país como en el exterior para que vivas las mejores experiencias.",
        },
        {
            id: 3,
            img: "/logo.png",
            text: "Trabajamos en modalidad full-time por lo que te podemos brindar asesoría la gran parte del día.",
        },
        {
            id: 4,
            img: "/logo.png",
            text: "Nos manejamos con flexibilidad a la hora de los pagos para que tengas la posibilidad de viajar sin que importen tus condiciones.",
        } 
    ]
    return (
        <div className="flex justify-between">
            {
                boxs.map((box) => {
                    return (
                        <div className="flex flex-col items-center gap-y-2">
                            <img src={box.img} className="size-[107px]" alt={box.id} />
                            <p className="w-3/4 text-center">{box.text}</p>
                        </div>                    
                    )
                })
            }
        </div>
    );
}
