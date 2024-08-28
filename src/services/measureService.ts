import { ICreateMeasure, IMeasureDate } from "../interfaces/ICreateMeasure";
import { IMeasure } from "../interfaces/IMeasure";
import { ServiceResponse } from "../interfaces/IServiceResponse";
import MeasureModel from "../models/measureModel";

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
        const newMeasure = await this.measureModel.create(measure, 1, 0)
        return { status: 'SUCCESSFUL', message: newMeasure };
    }
}