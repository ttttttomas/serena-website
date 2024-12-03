'use client'

import { useContext } from "react";
import { menuContext } from "@/app/context/MenuContext";

export default function Menu() {

    const { isActive, setIsActive } = useContext(menuContext);

    const handleClick = () => {
        setIsActive(!isActive);
        
    }

    return (
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 w-10 h-10"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
    );
}
