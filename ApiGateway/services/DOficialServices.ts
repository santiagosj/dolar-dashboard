import axios from "axios";

export const fetchDolarOficial = async () => {
    const response = await axios.get('http://localhost:5001/dolar/oficial');
    return response.data;
};