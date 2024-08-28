import { Response, Request, NextFunction } from 'express';

function validateCustomerCode(req: Request, res: Response, next: NextFunction): Response | void {
    const { customer_code: customerCode } = req.body;

    if (!customerCode || typeof customerCode != 'string') {
        return res.status(400).json(
            {
                error_code: 'INVALID_DATA',
                error_description: "Os dados fornecidos no corpo da requisição são inválidos"
            });
    }

    next();
}

export default validateCustomerCode;
