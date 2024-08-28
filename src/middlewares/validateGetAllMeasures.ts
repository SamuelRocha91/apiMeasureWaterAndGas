import { Response, NextFunction, Request } from 'express';

export const validateGetAllMeasures = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { measure_type: measureType} = req.query;
    const types = ["WATER", "GAS"]
  

    if (measureType && typeof measureType === 'string' && !types.includes(measureType.toUpperCase())) {
        return res
            .status(400)
            .json({
                error_code: "INVALID_TYPE", "error_description": "Tipo de medição não permitida" });
    }
   
    next();
};