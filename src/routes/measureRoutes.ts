import { Router } from 'express';
import validateImageBase64 from '../middlewares/validateImageBase64';
import validateCustomerCode from '../middlewares/validateCustomerCode';
import validateMeasureType from '../middlewares/validateMeaureType';
import validateMeasureDateTime from '../middlewares/validateMeasureDatetime';
import MeasureController from '../controllers/measureController';

const measureController = new MeasureController()

const measuresRouter = Router();

measuresRouter.route('/').post(
    validateImageBase64,
    validateCustomerCode,
    validateMeasureDateTime,
    validateMeasureType,
    measureController.createMeasure.bind(measureController)
)

export default measuresRouter;
