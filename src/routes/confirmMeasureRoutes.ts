import { Router } from 'express';
import validateImageBase64 from '../middlewares/validateImageBase64';
import validateCustomerCode from '../middlewares/validateCustomerCode';
import validateMeasureType from '../middlewares/validateMeaureType';
import validateMeasureDateTime from '../middlewares/validateMeasureDatetime';
import MeasureController from '../controllers/measureController';

const measureController = new MeasureController()

const confirmMeasuresRouter = Router();

confirmMeasuresRouter.route('/').patch(
    validateMeasureUuid,
    validateConfirmedValue,
    measureController.confirmMeasure.bind(measureController)
)

export default confirmMeasuresRouter;
