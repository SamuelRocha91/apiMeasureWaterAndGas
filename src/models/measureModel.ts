import { IMeasure } from '../interfaces/IMeasure';
import { PrismaClient } from '@prisma/client';

export default class MeasureModel {
    private prismaClient = new PrismaClient()

    async create(measure: IMeasure, value: number, dataImage: any): Promise<IMeasure> {
        return await this.prismaClient.measure.create({
            data: {
                customerCode: measure.customerCode,
                measureDatetime: new Date(measure.measureDatetime),
                measureType: measure.measureType, 
                measureValue: value,
            },
            include: {
                image: dataImage
            }
       })
    }

    async findAllByCode(code: string): Promise<IMeasure[]> {
        return await this.prismaClient.measure.findMany({
            where: {
                customerCode: code
            }
        })
    }

}