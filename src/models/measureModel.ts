import { ICreateImage } from '../interfaces/ICreateImage';
import { IConfirmed, ICreateMeasure, IMeasureDate } from '../interfaces/ICreateMeasure';
import { IMeasure } from '../interfaces/IMeasure';
import { PrismaClient } from '@prisma/client';

export default class MeasureModel {
    private prismaClient = new PrismaClient()

    async create(measure: IMeasure, value: number, dataImage: ICreateImage): Promise<ICreateMeasure> {
        const data = await this.prismaClient.measure.create({
            data: {
                customerCode: measure.customerCode,
                measureDatetime: new Date(measure.measureDatetime),
                measureType: measure.measureType, 
                measureValue: value,
                image: {
                    create: {
                        ...dataImage
                    }
                }
            },
            select: {
                image: {
                    select: {
                        imagePath: true,
                    }
                },
                measureValue: true,
                measureUuid: true,
            }
        })
        
        return {
            measureValue: data.measureValue,
            measureUuid: data.measureUuid,
            imageUrl: data.image?.imagePath
        }
    }

    async findAllByCode(code: string, type: string): Promise<IMeasureDate[]> {
        return await this.prismaClient.measure.findMany({
            where: {
                customerCode: code,
                measureType: type
            },
            select: {
                measureDatetime: true,
            }
        })
    }

    async findMeasureByUuid(uuid: string): Promise<IConfirmed | null>   {
        return await this.prismaClient.measure.findFirst({
            where: {
                measureUuid: uuid
            },
            select: {
                hasConfirmed: true
            }
        })
    }

    async confirmMeasure(uuid: string, value: number) {
        return await this.prismaClient.measure.update({
            where: {
                measureUuid: uuid
            },
            data: {
                measureValue: value,
                hasConfirmed: true
            }
        })
    }

    async findAllMeasures(code: string, type: string) {
        return await this.prismaClient.measure.findMany({
            where: {
                customerCode: code,
                measureType: type === "" ? { not: "" } : type,
            },
            select: {
                measureUuid: true,
                measureDatetime: true,
                measureType: true,
                hasConfirmed: true,
                image: {
                    select: {
                        imagePath: true
                    }
                }
            }
        })
    }

}