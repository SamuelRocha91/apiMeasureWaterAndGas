import { Response, Request, NextFunction } from 'express';

function validateImageBase64(req: Request, res: Response, next: NextFunction): Response | void {
        let figure; 
        const { image } = req.body;
        console.log('aqui02')
        if (!image) {
            return res.status(400).json(
                {
                    error_code: 'INVALID_DATA',
                    error_description: "Os dados fornecidos no corpo da requisição são inválidos"
                });
        }

        if (image.startsWith('data:')) {
            const parts = image.split(',');
            if (parts.length !== 2) {
                return res.status(400).json(
                    {
                        error_code: 'INVALID_DATA',
                        error_description: "Os dados fornecidos no corpo da requisição são inválidos"
                    });
            }
              figure = parts[1];
        }
    
        const isValid = /^[A-Za-z0-9+/]+={0,2}$/.test(figure);
        const isLengthValid = figure.length % 4 === 0;

        if (!isValid || !isLengthValid) {
            return res.status(400).json(
                {
                    error_code: 'INVALID_DATA',
                    error_description: "Os dados fornecidos no corpo da requisição são inválidos"
                });
        }
        next();
}

export default validateImageBase64;