import { Response, Request, NextFunction } from "express";
import InvalidDataException from "../exceptions/InvalidDataException";

function validateCustomerCode(req: Request, res: Response, next: NextFunction): Response | void {
  try {
    const { customer_code: customerCode } = req.body;

    if (!customerCode || typeof customerCode !== "string") {
      throw new InvalidDataException("INVALID_DATA",
        "Os dados fornecidos no corpo da requisição são inválidos");
    }

    return next();
  } catch (error) {
    return next(error);
  }
}

export default validateCustomerCode;
