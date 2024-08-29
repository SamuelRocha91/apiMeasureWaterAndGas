import { Response, Request, NextFunction } from 'express';
import { httpStatus } from '../utils/httpStatus.utils';

const PARTS_LENGTH = 2;
const FIGURE_LENGTH = 4;

function validateImageBase64(req: Request, res: Response, next: NextFunction): Response | void {
  let figure; 
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
    const parts = image.split(',');
    if (parts.length !== PARTS_LENGTH) {
      return res.status(httpStatus.BAD_REQUEST).json(
        {
          error_code: 'INVALID_DATA',
          error_description: "Os dados fornecidos no corpo da requisição são inválidos"
        }
      );
    }
    figure = parts[1];
  }
    
  const isValid = /^[A-Za-z0-9+/]+={0,2}$/.test(figure);
  const isLengthValid = figure.length % FIGURE_LENGTH === 0;

  if (!isValid || !isLengthValid) {
    return res.status(httpStatus.BAD_REQUEST).json(
      {
        error_code: 'INVALID_DATA',
        error_description: "Os dados fornecidos no corpo da requisição são inválidos"
      }
    );
  }
  return next();
}

export default validateImageBase64;
