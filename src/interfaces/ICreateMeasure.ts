export interface ICreateMeasure {
    imageUrl: string | null | undefined,
    measureValue: number,
    measureUuid: string
}

export interface IMeasureDate {
    measureDatetime: Date
}