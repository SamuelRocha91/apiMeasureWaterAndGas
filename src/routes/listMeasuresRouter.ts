import { Router } from 'express';
import MeasureController from '../controllers/measureController';
import { validateGetAllMeasures } from '../middlewares/validateGetAllMeasures';

const measureController = new MeasureController()

const listMeasuresRouter = Router();

listMeasuresRouter.route('/list').get(
    validateGetAllMeasures,
    measureController.listMeasures.bind(measureController)
)

export default listMeasuresRouter;
