import { Router } from 'express';
import { getDolarBlue } from '../controllers/DBlueController'

const dolarBlueRouter = Router();
dolarBlueRouter.get('/blue', getDolarBlue);

export default dolarBlueRouter;