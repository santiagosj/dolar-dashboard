const handler = async () => {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/bolsa")
    const data = await response.json();

    return new Response(JSON.stringify({
      precio_compra: data.compra,
      precio_venta: data.venta,
    }),
      { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 })
  }
}

handler();

// crear servidor Deno 
