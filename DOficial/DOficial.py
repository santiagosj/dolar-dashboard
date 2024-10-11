from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/dolar/oficial', method=['GET'])
def get_dolar_oficial():
    response = requests.get("https://dolarapi.com/v1/dolares/oficial")
    data = response.json()

    return jsonify({
        'precio_compra': data['compra'],
        'precio_venta': data['venta']
    })
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)  
