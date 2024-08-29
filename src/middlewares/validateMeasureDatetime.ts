import { Response, Request, NextFunction } from 'express';
import { httpStatus } from '../utils/httpStatus.utils';

function validateMeasureDateTime(req: Request, res: Response, next: NextFunction): Response | void {
  const { measure_datetime: measureDateTime } = req.body;
  const date = new Date(measureDateTime)

  if (!measureDateTime || isNaN(date.getTime()) || measureDateTime !== date.toISOString()) {
    return res.status(httpStatus.BAD_REQUEST).json(
      {
        error_code: 'INVALID_DATA',
        error_description: "Os dados fornecidos no corpo da requisição são inválidos"
      }
    );
  }

  return next();
}

export default validateMeasureDateTime;
