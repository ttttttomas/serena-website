
import Logo from "./icons/Logo";
import Instagram from "./icons/Instagram";
import Whatsapp from "./icons/Whatsapp";
import HeaderList from "./HeaderList";

export default function Header() {
    return <header className="flex w-full flex-col ">
        <div className="flex w-full justify-between px-10 py-5">
            <div className="flex items-center gap-x-4">
                <Logo w="120" h="116" />
                <img className="w-[206px] h-[79px]" src="/serena-nombre.png" alt="Nombre Logo" />
                <span>LEGAJO 11999</span>
            </div>
            <div className="flex items-center">
                <ul>
                    <li className="flex items-center gap-x-2">
                        <p>11 5405-3025 / 116375-9997</p>
                         <Whatsapp />
                    </li>
                    <li className="flex items-center justify-end gap-x-2">
                        <p>serenaviajes</p>
                         <Instagram />
                    </li>
                </ul>
            </div>
        </div>

        <HeaderList />
    </header>
}
