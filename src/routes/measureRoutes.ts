import { Router } from 'express';
import validateImageBase64 from '../middlewares/validateImageBase64';
import validateCustomerCode from '../middlewares/validateCustomerCode';
import validateMeasureType from '../middlewares/validateMeaureType';

const measuresRouter = Router();

measuresRouter.route('/upload').post(
    validateImageBase64,
    validateCustomerCode,
    validateMeasureDateTime,
    validateMeasureType,
    MeasureController.createMeasure
)

export default measuresRouter;
