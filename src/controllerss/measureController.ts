import { Request, Response } from 'express';

export default class MeasureController {

    constructor(
        private measureService = new MeasureService(),
    ) { }

   
    public async createMeasure(req: Request, res: Response) {
        const data = req.body;
        const object = {
            image: data.image,
            customerCode: data.customer_code,
            measureDatetime: data.measure_datetime,
            measureType: data.measure_type
        }
        const response = this.measureService.create(object);
        if (response.status != 'SUCCESSFUL') {
            return res.status(409).json(
                {
                    error_code: response.status,
                    error_description: response.message
                 });
        }
        res.status(201).json(response.message);
    }
}