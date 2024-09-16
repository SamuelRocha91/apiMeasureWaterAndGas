import { Response, NextFunction, Request } from "express";
import InvalidDataException from "../../exceptions/InvalidDataException";

export const validateTypePostCustomer = (
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

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof cep !== "string" ||
      typeof city !== "string" ||
      typeof state !== "string"
    ) {
      throw new InvalidDataException(
        "INVALID_DATA", "Tipo dados obrigatórios na requisição são inválidos"
      );
    }
    return next();
  } catch (error) {
    return next(error);
  }
};