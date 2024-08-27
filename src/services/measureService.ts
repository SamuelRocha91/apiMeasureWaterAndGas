import { IMeasure } from "../interfaces/IMeasure";
import { ServiceResponse } from "../interfaces/IServiceResponse";
import MeasureModel from "../models/measureModel";

export default class MeasureService {
    constructor(
        private measureModel = new MeasureModel(),
    ) { }

    public async createMeasure(measure: IMeasure): Promise<ServiceResponse<IMeasure>> {
        const allMeasure = await this.measureModel.findAllByCode(measure.customerCode);
        if (allMeasure.some((measureMonth: IMeasure ) => measureMonth.measureDatetime.getFullYear() === measure.measureDatetime.getFullYear() &&
            measureMonth.measureDatetime.getMonth() === measure.measureDatetime.getMonth())) {
            return {
                status: 'DOUBLE_REPORT', message: "Leitura do mês já realizada"
            }
        }
        const newMeasure = this.measureModel.create(measure)
        return { status: 'SUCCESSFUL', message: newMeasure };
    }
}