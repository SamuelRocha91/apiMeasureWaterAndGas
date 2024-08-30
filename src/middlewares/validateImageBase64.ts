import { Response, Request, NextFunction } from "express";
import InvalidDataException from "../exceptions/InvalidDataException";

const PARTS_LENGTH = 2;
const FIGURE_LENGTH = 4;

function validateImageBase64(req: Request, res: Response, next: NextFunction): Response | void {
  try {
    const { image } = req.body;
    if (!image) {
      throw new InvalidDataException("INVALID_DATA",
        "Os dados fornecidos no corpo da requisição são inválidos");
    }

    if (image.startsWith("data:")) {
      if (structureIsValid(image)) {
        return next();
      } else {
        throw new InvalidDataException("INVALID_DATA",
          "Os dados fornecidos no corpo da requisição são inválidos");
      }
    } else {
      throw new InvalidDataException("INVALID_DATA",
        "Os dados fornecidos no corpo da requisição são inválidos");
    }
  } catch (Error) {
    return next(Error);
  }
}

function structureIsValid(image: string): boolean {
  const parts = image.split(",");
  if (parts.length !== PARTS_LENGTH) {
    return false;
  }
  const data = parts[1] || "";
  const isValid = /^[A-Za-z0-9+/]+={0,2}$/.test(data);
  const isLengthValid = data.length % FIGURE_LENGTH === 0;

  if (!isValid || !isLengthValid) {
    return false;
  }

  return true;
}

export default validateImageBase64;
