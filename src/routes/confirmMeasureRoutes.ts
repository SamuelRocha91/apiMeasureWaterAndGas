import { Router } from 'express';
import MeasureController from '../controllers/measureController';
import validateMeasureUuid from '../middlewares/validateMeasureUuid';
import validateConfirmedValue from '../middlewares/validateConfirmedValue';

const measureController = new MeasureController()

const confirmMeasuresRouter = Router();

confirmMeasuresRouter.route('/').patch(
    validateMeasureUuid,
    validateConfirmedValue,
    measureController.confirmMeasure.bind(measureController)
)

export default confirmMeasuresRouter;
