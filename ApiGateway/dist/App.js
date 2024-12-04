"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const DBlueRoutes_1 = __importDefault(require("./routes/DBlueRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
// importar rutas aqui
app.use('/api/dolar', DBlueRoutes_1.default);
app.get('/', (req, res) => {
    try {
        res.send('Hola mundo');
    }
    catch (err) {
        const error = err;
        res.status(500).send({ message: error.message });
    }
});
exports.default = app;
