import { Response, NextFunction, Request } from 'express';
import { httpStatus } from '../utils/httpStatus.utils';

export const validateGetAllMeasures = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { measure_type: measureType } = req.query;
  const types = ["WATER", "GAS"]
  
  if (measureType && typeof measureType === 'string'
        && !types.includes(measureType.toUpperCase())) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({
        error_code: "INVALID_TYPE", error_description: "Tipo de medição não permitida" });
  }
   
  return next();
};
