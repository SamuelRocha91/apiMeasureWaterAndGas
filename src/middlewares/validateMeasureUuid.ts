import { Response, Request, NextFunction } from "express";
import InvalidDataException from "../exceptions/InvalidDataException";

function validateMeasureUuid(req: Request, res: Response, next: NextFunction): Response | void {

  try {
    const { measure_uuid: measureUuid } = req.body;

    if (!measureUuid || typeof measureUuid !== "string") {
      throw new InvalidDataException("INVALID_DATA",
        "Os dados fornecidos no corpo da requisição são inválidos");
    }

    return next();
  } catch (error) {
    return next(error);
  }
}

export default validateMeasureUuid;
