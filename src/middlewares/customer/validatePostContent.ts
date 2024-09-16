import { Response, NextFunction, Request } from "express";
import InvalidDataException from "../../exceptions/InvalidDataException";

const REGEX = /\S+@\S+\.\S+/;
const MIN_NAME_LENGTH = 3;

export const validatePostContentCustomer = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      email
    } = req.body;

    if (name.length < MIN_NAME_LENGTH) {
      throw new InvalidDataException(
        "INVALID_DATA", "Dados incompletos ou inválidos"
      );
    }
      
    if (!REGEX.test(email)) {
      throw new InvalidDataException(
        "INVALID_DATA", "Dados incompletos ou inválidos"
      );
    }
    return next();
  } catch (error) {
    return next(error);
  }
};
