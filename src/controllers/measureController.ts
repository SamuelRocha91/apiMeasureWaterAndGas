import { Request, Response } from 'express';
import MeasureService from '../services/measureService';
import { getImageUrl } from '../utils/image.utils';

export default class MeasureController {

    constructor(
        private measureService = new MeasureService(),
    ) { }

   
    public async createMeasure(req: Request, res: Response) {
        const data = req.body;
        const object = {
            image: data.image,
            customerCode: data.customer_code,
            measureDatetime: new Date(data.measure_datetime),
            measureType: data.measure_type
        }
        const response = await this.measureService.createMeasure(object);
        if (response.status != 'SUCCESSFUL') {
            return res.status(409).json(
                {
                    error_code: response.status,
                    error_description: response.message
                 });
        }
        const imageUrl = getImageUrl(response.message.imageUrl as string)
        res.status(201).json({
            image_url: imageUrl,
            measure_value: response.message.measureValue,
            measure_uuid: response.message.measureUuid
        });
    }

    public async confirmMeasure(req: Request, res: Response) {
        const data = req.body;
        const object = {
            measureUuid: data.measure_uuid,
            measureValue: data.confirmed_value
        }

        const response = await this.measureService.confirmMeasure(object);

        if (response.status == 'MEASURE_NOT_FOUND') {
            return res.status(404).json(
                {
                    error_code: response.status,
                    error_description: response.message
                });
        } else if (response.status == 'CONFIRMATION_DUPLICATE') {
            return res.status(409).json(
                {
                    error_code: response.status,
                    error_description: response.message
                });
        }
        res.status(200).json({
            success: true
        });
    }
}