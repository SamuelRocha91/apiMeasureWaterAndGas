import { Response, Request, NextFunction } from 'express';
import { httpStatus } from '../utils/httpStatus.utils';

function validateConfirmedValue(req: Request, res: Response, next: NextFunction): Response | void {
  const { confirmed_value: confirmedValue } = req.body;

  if (!confirmedValue || typeof confirmedValue !== 'number') {
    return res.status(httpStatus.BAD_REQUEST).json(
      {
        error_code: 'INVALID_DATA',
        error_description: "Os dados fornecidos no corpo da requisição são inválidos"
      }
    );
  }

  return next();
}

export default validateConfirmedValue;
