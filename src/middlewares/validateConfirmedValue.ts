import { Response, Request, NextFunction } from 'express';

function validateConfirmedValue(req: Request, res: Response, next: NextFunction): Response | void {
    const { confirmed_value: confirmedValue } = req.body;

    if (!confirmedValue || typeof confirmedValue != 'number') {
        return res.status(400).json(
            {
                error_code: 'INVALID_DATA',
                error_description: "Os dados fornecidos no corpo da requisição são inválidos"
            });
    }

    next();
}

export default validateConfirmedValue;
