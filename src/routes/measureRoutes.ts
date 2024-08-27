import { Router } from 'express';
import validateImageBase64 from '../middlewares/validateImageBase64';

const measuresRouter = Router();

measuresRouter.route('/upload').post(
    validateImageBase64,
    validateCustomeCode,
    validateMeasureDateTime,
    validateMeaureType,
    MeasureController.createMeasure
)

export default measuresRouter;
