'use client'
import axios from "axios";
import {toast} from "sonner"
import { createContext, useState } from "react";

export const productsContext = createContext();

export default function ProductsContextProvider ({ children }) {

    const [products, setProducts] = useState([]);

    // const Products = [{
    //     id : string,
    //     destino : string,
    //     date : [string],
    //     days: number,
    //     nights: number,
    //     regimen: string,
    //     transporte : string,
    //     periodo : string,
    //     paquete : string,
    //     subtitulo : string,
    //     descripcion : string,
    //     moneda : string,
    //     precio : number,
    //     adicional : string,
    //     img : string,
    //     desde : boolean (true | false),
    //     hotel: string,
    //     incluye : [string],
    //     observaciones : [string],
    //     itinerario : [string],
    //     tarifas : [string],
    // }]


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
        try  {
            axios.post(`${baseURL}/create_product`, product);
        toast.success('Producto creado con éxito');
    } catch (error) {
        toast.error('Error al crear el producto');
        console.error("Error al agregar producto:", error);
    }
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
}