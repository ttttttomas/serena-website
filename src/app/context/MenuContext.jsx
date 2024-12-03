'use client'
import { createContext, useState } from "react";

export const menuContext = createContext();

export default function MenuContextProvider ({ children }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <menuContext.Provider value={{ isActive, setIsActive }}>
            {children}
        </menuContext.Provider>
    );
};