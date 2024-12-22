'use client'
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
    function deleteProduct (id) {
        return axios.delete(`${baseURL}/${id}`);
    }
    function createProduct (product) {
        return axios.post(baseURL, product);
    }
    function updateProduct (id, product) {
        return axios.put(`${baseURL}/${id}`, product);
    }      
    
    return (
        <productsContext.Provider value={{ 
            products, 
            setProducts, 
            getProducts, 
            getProductById, 
            deleteProduct, 
            createProduct, 
            updateProduct 
            }}
        >
            {children}
        </productsContext.Provider>
    );
};