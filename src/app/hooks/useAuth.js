import { useState } from "react";

export function useAuth() {
    const [loading] = useState(false);
    const [error] = useState(null);

    const login = async (data) => {
        try {
            const res = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
    
            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "Error en la autenticación");
    
            return result.token;
        } catch (err) {
            console.error("Error en login:", err.message);
        }
    };
    

    return { login, loading, error };
}
