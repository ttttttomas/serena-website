'use client'
import axios from "axios";
import {toast} from "sonner"
import { createContext, useState } from "react";

export const productsContext = createContext();

export default function ProductsContextProvider ({ children }) {

    const baseURL = "https://backend-serena-production.up.railway.app/products"
    const API_URL = "https://backend-serena-production.up.railway.app"
    
    const [products, setProducts] = useState([]);

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
        try {
            axios.put(`${baseURL}/${id}`, product);
            toast.success('Producto modificado con éxito');  
        } catch (error) {
            console.error("Error al modificar producto:", error);

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
        toast.success('Formulario enviado con exito');
    } catch (error) {
        console.error("Error al enviar formulario:", error);
        toast.error('Error al enviar formulario');

    }
    }

    function getDestacados () {
        return axios.get('https://backend-serena-production.up.railway.app/destacados');

    }

    function createDestacado (product) {
        try  {
            axios.post(`${API_URL}/create_feature`, JSON.stringify(product), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        toast.success('Producto creado con éxito');
    } catch (error) {
        console.error("Error al agregar producto:", error);
    }
    }

    function updateDestacado (id, product) {
        return axios.put(`${API_URL}/features/${id}`, product);    
    }
    
    function deleteDestacado (id) {
        return axios.delete(`${API_URL}/features/${id}`);
    }

    function getCartelera () {
        return axios.get('https://backend-serena-production.up.railway.app/cartelera')
    }

    function createCartelera (product) {
        try  {
            axios.post(`${API_URL}/create_flyer`, JSON.stringify(product), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        toast.success('Producto creado con éxito');
    } catch (error) {
        console.error("Error al agregar producto:", error);
    }
    }

    function updateCartelera (id, product) {
        return axios.put(`${API_URL}/flyers/${id}`, product);    

    }

    function getCartelById (id){
        return axios.get(`${API_URL}/cartelera/${id}`);

    }

    function deleteCartelera (id) {
        return axios.delete(`${API_URL}/flyers/${id}`);

    }

    async function loginUser(username, password) {
        const formData = new URLSearchParams();
        formData.append("username", username);
        formData.append("password", password);

        const response = await axios.post(`${API_URL}/login`, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        if(response.status === 200){
            toast.success(response.data.message);
            const token = response.data.token;
            localStorage.setItem("token", token);
            return true;
        }
    }
    return (
        <productsContext.Provider value={{ 
            products,
            setProducts,
            getProducts,
            getDestacados,
            getCartelera,
            getCartelById, 
            getProductById, 
            deleteProduct,
            deleteCartelera, 
            deleteDestacado,
            createProduct,
            createCartelera,
            createDestacado,
            updateProduct,
            updateDestacado,
            updateCartelera,
            contact,
            loginUser
            }}
        >
            {children}
        </productsContext.Provider>
    );
}