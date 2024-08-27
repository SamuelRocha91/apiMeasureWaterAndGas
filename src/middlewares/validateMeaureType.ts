import { Response, Request, NextFunction } from 'express';

function validateMeasureType(req: Request, res: Response, next: NextFunction): Response | void {
    const { measure_type: measureType } = req.body;
    const VALID_TYPES = ["WATER", "GAS"]

    if (!measureType || typeof measureType!= 'string' || !VALID_TYPES.includes(measureType)) {
        return res.status(400).json(
            {
                error_code: 'INVALID_DATA',
                error_description: "Os dados fornecidos no corpo da requisição são inválidos"
            }
        );
    }

    next();
}

export default validateMeasureType;
