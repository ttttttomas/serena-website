import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        const { username, password } = await req.json();
        console.log("Datos recibidos:", username, password);

        if (username !== "admin" || password !== "serena11999") {
            return NextResponse.json({ error: "Credenciales incorrectas" }, { status: 401 });
        }

        if (!process.env.JWT_SECRET) {
            console.error("Error: JWT_SECRET no está definido");
            return NextResponse.json({ error: "Error en la configuración del servidor" }, { status: 500 });
        }

        const token = jwt.sign({ username },
             "e5f3b6f7d8a2c9d1e4f7a8b2c3d6e9f1g5h7j9k1l3m5n7o9p1q3r5s7t9u1v3w5x7y9z1",
             { expiresIn: "30d" });
             
        return NextResponse.json({ token });
    } catch (error) {
        console.error("Error en la API Route:", error);
        return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
    }
}
