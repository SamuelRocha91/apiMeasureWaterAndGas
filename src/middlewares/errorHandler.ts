import { Request, Response } from "express";
import BaseError from "../exceptions/BaseError";
import InternalServerException from "../exceptions/InternalServerException";

const normalizeError = (err: Error) => {
  if (err instanceof BaseError) {
    return err;
  }

  return new InternalServerException(err);
};

const ErrorHandler = (
  error: Error,
  _req: Request,
  res: Response
) => {
  const baseError = normalizeError(error);

  const { message, statusCode, typeError } = baseError.getBody();

  return res.status(statusCode).json({ 
    error_code: typeError,
    error_description: message
  });
};

export default ErrorHandler;
