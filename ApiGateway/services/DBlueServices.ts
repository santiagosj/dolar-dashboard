import axios from 'axios';

export const fetchDolarBlue = async () => {
    const response = await axios.get('http://localhost:5002/dolar/blue');
    return response.data;
};
