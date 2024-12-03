import { Request, Response } from 'express';
import { fetchDolarOficial } from '../services/DOficialServices';

export const getDolarOficial = async (req: Request, res: Response) => {
    try {
        const dolarOficial = await fetchDolarOficial();
        res.json(dolarOficial);
    } catch (error) {
        console.error('Error fetching Dolar Oficial:', error);
        res.status(500).send('Error fetching Dolar Oficial');
    }
};