import { Router } from 'express';

const measuresRouter = Router();

measuresRouter.route('/upload').post(
    validateImageBase64,
    validateCustomeCode,
    validateMeasureDateTime,
    validateMeaureType,
    MeasureController.createMeasure
)

export default measuresRouter;
