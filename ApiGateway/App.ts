import express from 'express';
import dolarBlueRouter from './routes/DBlueRoutes';
import { getDolarOficial } from './controllers/DOficialControllers';
const app = express();

// importar rutas aqui
app.use('/dolar', dolarBlueRouter);
app.use('/dolar', getDolarOficial);

export default app;