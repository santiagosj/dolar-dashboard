import express from 'express';
import cors from 'cors';
import dolarBlueRouter from './routes/DBlueRoutes';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

// importar rutas aqui
app.use('/api/dolar', dolarBlueRouter);

app.get('/', (req, res) => {
    try {
        res.send('Hola mundo')
    } catch (err) {
        const error = err as Error
        res.status(500).send({ message: error.message })
    }
})

export default app;