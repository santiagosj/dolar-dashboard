import { Router } from 'express';
import { getDolarOficial } from '../controllers/DOficialControllers';

const dolarOficialRouter = Router();
dolarOficialRouter.get('/oficial', getDolarOficial)

export default dolarOficialRouter;