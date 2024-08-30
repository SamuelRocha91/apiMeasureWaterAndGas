import { Response, NextFunction, Request } from "express";
import InvalidDataException from "../exceptions/InvalidDataException";

export const validateGetAllMeasures = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { measure_type: measureType } = req.query;
    const types = ["WATER", "GAS"];
  
    if (measureType && typeof measureType !== "string" ||
      (typeof measureType === "string" && !types.includes(measureType.toUpperCase()))) {
      throw new InvalidDataException("INVALID_TYPE", "Tipo de medição não permitida");
    }
   
    return next();
  } catch (error) {
    return next(error);
  }
};
