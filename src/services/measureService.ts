import {
  ICreateMeasure,
  IMeasureDate,
  IMeasureResponseSummary,
  IMeasureSummary
} from "../interfaces/ICreateMeasure";
import { IMeasure } from "../interfaces/IMeasure";
import { ServiceResponse } from "../interfaces/IServiceResponse";
import MeasureModel from "../models/measureModel";
import { extractMimeType, extractSize, saveBase64Image } from "../utils/image.utils";
import checkMeasureValue from "../utils/gemini.utils";
import DoubleReportException from "../exceptions/DoubleReportException";
import NotFoundException from "../exceptions/NotFoundException";

export default class MeasureService {
  constructor(
        private measureModel = new MeasureModel()
  ) { }

  public async createMeasure(measure: IMeasure): Promise<ServiceResponse<ICreateMeasure>> {
    const allMeasure = await this.measureModel.findAllByCode(
      measure.customerCode,
      measure.measureType
    );
    if (allMeasure.some((measureMonth: IMeasureDate) =>
      measureMonth.measureDatetime.getFullYear() === measure.measureDatetime.getFullYear() &&
      measureMonth.measureDatetime.getMonth() === measure.measureDatetime.getMonth())) {
    
      throw new DoubleReportException('DOUBLE_REPORT', "Leitura do mês já realizada")
    
    }
    const mime = extractMimeType(measure.image)
    const size = extractSize(measure.image)
    const path = await saveBase64Image(measure.image, measure.customerCode, measure.measureType)
    const value = await checkMeasureValue(mime, measure.image.split(',')[1])
    const dataImage = {
      imagePath: path,
      mimeType: mime,
      size: size
    }
    const newMeasure = await this.measureModel.create(measure, value, dataImage)

    return { status: 'SUCCESSFUL', message: newMeasure };
  }

  public async confirmMeasure(object: IMeasureSummary): Promise<ServiceResponse<string>> {
    const measureAllReadyExists = await this.measureModel.findMeasureByUuid(object.measureUuid);
    if (!measureAllReadyExists) {
      throw new NotFoundException('MEASURE_NOT_FOUND', "Leitura não encontrada")
    } else if (measureAllReadyExists.hasConfirmed === true) {
      throw new DoubleReportException('CONFIRMATION_DUPLICATE', "Leitura do mês já realizada")
    }
    await this.measureModel.confirmMeasure(object.measureUuid, object.measureValue)
    return { status: 'SUCCESSFUL', message: 'ok' };
  }

  public async listMeasures(
    code: string,
    type: string
  ): Promise<ServiceResponse<IMeasureResponseSummary[]>>
  {
    const allMeasures = await this.measureModel.findAllMeasures(code, type);

    if (!allMeasures) {
      throw new NotFoundException('MEASURES_NOT_FOUND', "Nenhuma leitura encontrada")
    }

    return { status: 'SUCCESSFUL', message: allMeasures };
  }
}