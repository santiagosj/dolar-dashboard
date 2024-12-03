import axios from 'axios';

export const fetchDolarBlue = async () => {
    try {
        const response = await axios.get('http://dolar-blue-fastapi:5002/dolar/blue');

        return response.data;
    } catch (err) {
        console.log("Error en catch service");
        console.log(err);
    }
};
