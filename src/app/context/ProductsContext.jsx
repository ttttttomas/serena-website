'use client'
import { use, useEffect } from "react";
import axios from "axios";
import { createContext, useState } from "react";

export const productsContext = createContext();

export default function ProductsContextProvider ({ children }) {

    const [products, setProducts] = useState([]);

    const baseURL = "https://backend-serena-production.up.railway.app/products"

    function getProducts () {
        return axios.get(baseURL);
    }
    function getProductById (id) {
        return axios.get(`${baseURL}/${id}`);
    }

    return (
        <productsContext.Provider value={{ products, setProducts, getProducts, getProductById }}>
            {children}
        </productsContext.Provider>
    );
};