import { Response, Request, NextFunction } from "express";
import InvalidDataException from "../exceptions/InvalidDataException";

function validateMeasureType(req: Request, res: Response, next: NextFunction): Response | void {
  const { measure_type: measureType } = req.body;
  const VALID_TYPES = ["WATER", "GAS"];

  if (!measureType || typeof measureType !== "string" || !VALID_TYPES.includes(measureType)) {
    throw new InvalidDataException("INVALID_DATA",
      "Os dados fornecidos no corpo da requisição são inválidos");
  }

  return next();
}

export default validateMeasureType;
