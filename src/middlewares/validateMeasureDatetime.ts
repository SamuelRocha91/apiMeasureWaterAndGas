import { Response, Request, NextFunction } from 'express';

function validateMeasureDateTime(req: Request, res: Response, next: NextFunction): Response | void {
    const { measure_datetime: measureDateTime } = req.body;
    const date = new Date(measureDateTime)

    if (!measureDateTime || isNaN(date.getTime()) || measureDateTime !== date.toISOString()) {
        return res.status(400).json(
            {
                error_code: 'INVALID_DATA',
                error_description: "Os dados fornecidos no corpo da requisição são inválidos"
            }
        );
    }

    next();
}

export default validateMeasureDateTime;
