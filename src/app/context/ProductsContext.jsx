'use client'
import axios from "axios";
import {toast} from "sonner"
import { createContext, useState } from "react";

export const productsContext = createContext();

export default function ProductsContextProvider ({ children }) {

    const [products, setProducts] = useState([]);

    const [user, setUser] = useState(false);

    const baseURL = "https://backend-serena-production.up.railway.app/products"
    const API_URL = "https://backend-serena-production.up.railway.app"

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
            axios.post(`${baseURL}/create_product`, JSON.stringify(product), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        toast.success('Producto creado con éxito');
    } catch (error) {
        console.error("Error al agregar producto:", error);
    }
}
    function updateProduct (id, product) {
        return axios.put(`${baseURL}/${id}`, product);
    }      

    function login (username, password) {
        try {
            const response = axios.post(`${API_URL}/login`,JSON.stringify(username,password), {
              headers: {
                "Content-Type": "application/json",
              },
            })
            return response.data
          } catch (error) {
            console.log("Error al iniciar sesión:", error);
          }
    }

    function contact (data) {
        try  {
            axios.post(`${API_URL}/send-email`, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    } catch (error) {
        console.error("Error al enviar formulario:", error);
        toast.error('Error al enviar formulario');

    }
    }

    function handleLogout () {
        setUser(false)
    }
    
    return (
        <productsContext.Provider value={{ 
            products,
            user, 
            setProducts,
            setUser,
            handleLogout, 
            getProducts, 
            getProductById, 
            deleteProduct, 
            createProduct, 
            updateProduct,
            login,
            contact
            }}
        >
            {children}
        </productsContext.Provider>
    );
}