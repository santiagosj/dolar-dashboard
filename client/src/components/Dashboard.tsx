import { useState, useEffect } from 'react';
import axios from 'axios';

interface DolarData {
  precio_compra: string;
  precio_venta: string;
}

const Dashboard: React.FC = () => {
  // const [dolarOficial, setDolarOficial] = useState<DolarData | null>(null);
  const [dolarBlue, setDolarBlue] = useState<DolarData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const oficialResponse = await axios.get('/api/dolar/oficial');
        const blueResponse = await axios.get('http://localhost:4000/api/dolar/blue');
        // setDolarOficial(oficialResponse.data);
        setDolarBlue(blueResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('====================================');
    console.log('Dolar Blue: ', dolarBlue);
    console.log('====================================');
    // console.log('====================================');
    // console.log('Dolar  Oficial: ', dolarOficial);
    // console.log('====================================');
  }, [dolarBlue])

  return (
    <div>
      <h1>Dashboard de Cotizaciones del Dólar</h1>
      {/* <div>
        <h2>Dólar Oficial</h2>
        <p>Compra: {dolarOficial?.precio_compra}</p>
        <p>Venta: {dolarOficial?.precio_venta}</p>
      </div> */}
      <div>
        <h2>Dólar Blue</h2>
        <p>Compra: {dolarBlue?.precio_compra}</p>
        <p>Venta: {dolarBlue?.precio_venta}</p>
      </div>
    </div>
  );
};

export default Dashboard;
