export interface ICreateMeasure {
    imageUrl: string | null | undefined,
    measureValue: number,
    measureUuid: string
}

export type IMeasureSummary = Pick<ICreateMeasure, 'measureValue' | 'measureUuid'>;

export interface IConfirmed {
    hasConfirmed: boolean
}

export interface IMeasureDate {
    measureDatetime: Date
}