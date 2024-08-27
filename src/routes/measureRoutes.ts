import { Router } from 'express';
import validateImageBase64 from '../middlewares/validateImageBase64';
import validateCustomerCode from '../middlewares/validateCustomerCode';

const measuresRouter = Router();

measuresRouter.route('/upload').post(
    validateImageBase64,
    validateCustomerCode,
    validateMeasureDateTime,
    validateMeaureType,
    MeasureController.createMeasure
)

export default measuresRouter;
