import { Response, Request, NextFunction } from "express";
import InvalidDataException from "../exceptions/InvalidDataException";

function validateMeasureDateTime(req: Request, res: Response, next: NextFunction): Response | void {
  try {
    const { measure_datetime: measureDateTime } = req.body;
    const date = new Date(measureDateTime);

    if (!measureDateTime || isNaN(date.getTime()) || measureDateTime !== date.toISOString()) {
      throw new InvalidDataException("INVALID_DATA",
        "Os dados fornecidos no corpo da requisição são inválidos");
    }
    return next();
  } catch (error) {
    return next(error);
  }
}

export default validateMeasureDateTime;
