import { Request, Response, NextFunction } from "express";
import MeasureService from "../services/measureService";
import { getImageUrl } from "../utils/image.utils";
import { IMeasureAll } from "../interfaces/IMeasure";
import { httpStatus } from "../utils/httpStatus.utils";
import { ServiceResponse } from "../interfaces/IServiceResponse";
import { IMeasureResponseSummary } from "../interfaces/ICreateMeasure";

export default class MeasureController {

  constructor(
        private measureService = new MeasureService()
  ) { }

  public async createMeasure(req: Request, res: Response, next: NextFunction
  ) {
    try {
      const data = req.body;
      const objectMeasureCamelCase = {
        image: data.image,
        customerCode: data.customer_code,
        measureDatetime: new Date(data.measure_datetime),
        measureType: data.measure_type
      };

      const response = await this.measureService.createMeasure(objectMeasureCamelCase);
      const { message: { imageUrl, measureValue, measureUuid } } = response;
      const imageFinal = getImageUrl(imageUrl || "");
      return res.status(httpStatus.CREATED).json(
        {
          image_url: imageFinal,
          measure_value: measureValue,
          measure_uuid: measureUuid
        });
    } catch (error) {
      return next(error);
    }
  }

  public async confirmMeasure(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const objectMeasureCamelCase = {
        measureUuid: data.measure_uuid,
        measureValue: data.confirmed_value
      };

      await this.measureService.confirmMeasure(objectMeasureCamelCase);

      return res.status(httpStatus.OK).json(
        {
          success: true
        }
      );
    } catch (error) {
      return next(error);
    }
  }

  public async listMeasures(req: Request, res: Response, next: NextFunction) {
    try {
      const { customerCode } = req.params;
      const { measure_type: measureType } = req.query;
      let response;
      if (measureType && typeof measureType === "string") {
        response = await this.measureService.listMeasures(customerCode, measureType.toUpperCase());
      } else {
        response = await this.measureService.listMeasures(customerCode);
      }
  
      const objectResponse = this.createResponse(response, customerCode);

      return res.status(httpStatus.OK).json(objectResponse);
    } catch (error) {
      return next(error);
    }
  }

  private createResponse(
    response: ServiceResponse<IMeasureResponseSummary[]>,
    customerCode: string
  ) {
    const objectResponse: {
      customer_code: string;
      measure: IMeasureAll[];
    } = {
      customer_code: customerCode,
      measure: []
    };
    objectResponse.customer_code = customerCode;
    if (Array.isArray(response.message)) {
      response.message.forEach((item) => {
        const newMeasure = {
          measure_uuid: item.measureUuid,
          measure_type: item.measureType,
          measure_datetime: new Date(item.measureDatetime),
          has_confirmed: item.hasConfirmed,
          image_url: getImageUrl(item.image?.imagePath || "")
        };
        objectResponse.measure.push(newMeasure);
      });
    }
    return objectResponse;
  }
}