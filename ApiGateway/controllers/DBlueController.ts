import { Request, Response } from "express";
import { fetchDolarBlue } from '../services/DBlueServices';

export const getDolarBlue = async (req: Request, res: Response) => {
    try {
        const dolarBlueData = await fetchDolarBlue();
        res.json(dolarBlueData);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ message: error.message });
    }
}