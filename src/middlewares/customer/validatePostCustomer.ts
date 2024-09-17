import { Response, NextFunction, Request } from "express";
import InvalidDataException from "../../exceptions/InvalidDataException";

export const validatePostCustomer = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      email,
      cep,
      city,
      state
    } = req.body;
    if (!name || !email || !cep || !city || !state) {
      throw new InvalidDataException(
        "INVALID_DATA", "Ausência de dados obrigatórios na requisição"
      );
    }
    return next();
  } catch (error) {
    return next(error);
  }
};
