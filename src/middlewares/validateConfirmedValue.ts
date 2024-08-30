import { Response, Request, NextFunction } from "express";
import InvalidDataException from "../exceptions/InvalidDataException";

function validateConfirmedValue(req: Request, _res: Response, next: NextFunction): Response | void {

  try {
    const { confirmed_value: confirmedValue } = req.body;

    if (!confirmedValue || typeof confirmedValue !== "number") {
    
      throw new InvalidDataException("INVALID_DATA",
        "Os dados fornecidos no corpo da requisição são inválidos");
    }

    return next();
  } catch (error) {
    return next(error);
  }
}

export default validateConfirmedValue;
