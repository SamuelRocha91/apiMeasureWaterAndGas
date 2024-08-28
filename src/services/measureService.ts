import { ICreateMeasure, IMeasureDate, IMeasureSummary } from "../interfaces/ICreateMeasure";
import { IMeasure } from "../interfaces/IMeasure";
import { ServiceResponse } from "../interfaces/IServiceResponse";
import MeasureModel from "../models/measureModel";
import { extractMimeType, extractSize, saveBase64Image } from "../utils/image.utils";
import checkMeasureValue from "../utils/gemini.utils";

export default class MeasureService {
    constructor(
        private measureModel = new MeasureModel(),
    ) { }

    public async createMeasure(measure: IMeasure): Promise<ServiceResponse<ICreateMeasure>> {
        const allMeasure = await this.measureModel.findAllByCode(measure.customerCode, measure.measureType);
        if (allMeasure.some((measureMonth: IMeasureDate ) => measureMonth.measureDatetime.getFullYear() === measure.measureDatetime.getFullYear() &&
            measureMonth.measureDatetime.getMonth() === measure.measureDatetime.getMonth())) {
            return {
                status: 'DOUBLE_REPORT', message: "Leitura do mês já realizada"
            }
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
        const newMeasure = await this.measureModel.create(measure, value,dataImage)
        return { status: 'SUCCESSFUL', message: newMeasure };
    }

    public async confirmMeasure(object: IMeasureSummary) {
        const measureAllReadyExists = await this.measureModel.findMeasureByUuid(object.measureUuid);
        if (!measureAllReadyExists) {
            return {
                status: 'MEASURE_NOT_FOUND', message: "Leitura não encontrada"
            }
        } else if (measureAllReadyExists.hasConfirmed) {
            return {
                status: 'CONFIRMATION_DUPLICATE', message: "Leitura do mês já realizada"
            }
        }

        await this.measureModel.confirmMeasure(object.measureUuid, object.measureValue)
        return { status: 'SUCCESSFUL', message: 'ok' };
    }

    public async listMeasures(code: string, type: string) {
        const allMeasures = await this.measureModel.findAllMeasures(code, type);

        if (!allMeasures) {
            return {
                status: 'MEASURES_NOT_FOUND', message: "Nenhuma leitura encontrada"
            }
        }

        return { status: 'SUCCESSFUL', message: allMeasures};
    }
}