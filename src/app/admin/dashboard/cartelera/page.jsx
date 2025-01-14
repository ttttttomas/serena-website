"use client";
import { useState } from "react";
export default function page() {
  const [image, setImage] = useState("");
  const handleFileChange = async (e) => {
    const imageFile = e.target.files[0];
    const url = `https://api.imgbb.com/1/upload?key=95eacfe7e3c98a0752a1c18aa38942a7&image=${imageFile.name}`;
    const data = new FormData();
    data.append("image", imageFile);

    try {
      const response = await fetch(url, {
        // Agregar await aquí
        method: "POST",
        body: data,
      });
      const responseData = await response.json(); // Procesar respuesta
      setImage(responseData.data.url); // Guardar la URL de la imagen
      console.log(responseData.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    alert("Imagen subida! La url es " + image);
  }
  return (
    <>
        <input 
        onChange={handleFileChange} 
        type="file" 
        name="image" />
        {image && <img src={image} alt="Imagen" />}
        <button
        className="block m-3 bg-black/50" onClick={handleSubmit} type="submit">Subir foto</button>
    </>
  );
}
