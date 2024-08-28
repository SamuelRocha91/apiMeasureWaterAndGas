import { Response, Request, NextFunction } from 'express';

function validateMeasureUuid(req: Request, res: Response, next: NextFunction): Response | void {
    const { measure_uuid: measureUuid } = req.body;

    if (!measureUuid || typeof measureUuid != 'string') {
        return res.status(400).json(
            {
                error_code: 'INVALID_DATA',
                error_description: "Os dados fornecidos no corpo da requisição são inválidos"
            });
    }

    next();
}

export default validateMeasureUuid;
