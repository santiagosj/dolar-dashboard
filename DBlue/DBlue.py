from fastapi import FastAPI
import requests

app=FastAPI()
@app.get("/dolar/blue")
async def get_dolar_blue():

    response = requests.get("https://dolarapi.com/v1/dolares/blue")
    data = response.json()

    return {
        'precio_compra': data['compra'],
        'precio_venta': data['venta']
    }