export interface ICreateMeasure {
    imageUrl: string | null | undefined,
    measureValue: number,
    measureUuid: string
}

export interface IMeasureReponse {
    measureUuid: string,
    measureType: string,
    measureDatetime: Date,
    measureValue: number,
    customerCode: string,
    hasConfirmed: boolean,
    updatedAt: Date,
    createdAt: Date;
}

export interface IMeasureResponseSummary {
    measureUuid: string;
    measureType: string;
    measureDatetime: Date;
    hasConfirmed: boolean;
    image: {
        imagePath: string | null;
    } | null
}

export type IMeasureSummary = Pick<ICreateMeasure, 'measureValue' | 'measureUuid'>;

export interface IConfirmed {
    hasConfirmed: boolean
}

export interface IMeasureDate {
    measureDatetime: Date
}