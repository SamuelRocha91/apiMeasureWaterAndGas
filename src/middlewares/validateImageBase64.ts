import { Response, Request, NextFunction } from 'express';
import { httpStatus } from '../utils/httpStatus.utils';

const PARTS_LENGTH = 2;
const FIGURE_LENGTH = 4;

function validateImageBase64(req: Request, res: Response, next: NextFunction): Response | void {
  const { image } = req.body;
  if (!image) {
    return res.status(httpStatus.BAD_REQUEST).json(
      {
        error_code: 'INVALID_DATA',
        error_description: "Os dados fornecidos no corpo da requisição são inválidos"
      }
    );
  }

  if (image.startsWith('data:')) {
    return structureIsValid(image) ? next() : res.status(httpStatus.BAD_REQUEST).json(
      {
        error_code: 'INVALID_DATA',
        error_description: "Os dados fornecidos no corpo da requisição são inválidos"
      }
    );
  } else {
    return res.status(httpStatus.BAD_REQUEST).json(
      {
        error_code: 'INVALID_DATA',
        error_description: "Os dados fornecidos no corpo da requisição são inválidos"
      }
    );
  } 
}

function structureIsValid(image: string): boolean {
  const parts = image.split(',');
  if (parts.length !== PARTS_LENGTH) {
    return false
  }
  const data = parts[1] || ''
  const isValid = /^[A-Za-z0-9+/]+={0,2}$/.test(data);
  const isLengthValid = data.length % FIGURE_LENGTH === 0;

  if (!isValid || !isLengthValid) {
    return false
  }

  return true
}

export default validateImageBase64;
