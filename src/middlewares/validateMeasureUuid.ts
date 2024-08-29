import { Response, Request, NextFunction } from 'express';
import { httpStatus } from '../utils/httpStatus.utils';

function validateMeasureUuid(req: Request, res: Response, next: NextFunction): Response | void {
  const { measure_uuid: measureUuid } = req.body;

  if (!measureUuid || typeof measureUuid !== 'string') {
    return res.status(httpStatus.BAD_REQUEST).json(
      {
        error_code: 'INVALID_DATA',
        error_description: "Os dados fornecidos no corpo da requisição são inválidos"
      }
    );
  }

  return next();
}

export default validateMeasureUuid;
