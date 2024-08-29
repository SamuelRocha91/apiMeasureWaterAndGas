import { Response, Request, NextFunction } from 'express';
import { httpStatus } from '../utils/httpStatus.utils';

function validateCustomerCode(req: Request, res: Response, next: NextFunction): Response | void {
  const { customer_code: customerCode } = req.body;

  if (!customerCode || typeof customerCode !== 'string') {
    return res.status(httpStatus.BAD_REQUEST).json(
      {
        error_code: 'INVALID_DATA',
        error_description: "Os dados fornecidos no corpo da requisição são inválidos"
      }
    );
  }

  return next();
}

export default validateCustomerCode;
