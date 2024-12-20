'use client'
const api = fetch("https://backend-serena-production.up.railway.app/products").then(res => res.json())
console.log(api);