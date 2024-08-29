export interface IMeasure {
    image: string,
    customerCode: string,
    measureDatetime: Date,
    measureType: "WEATHER" | "GAS"
}

export interface IMeasureAll {
    measure_uuid: string;
    measure_type: string;
    measure_datetime: Date;
    has_confirmed: boolean;
    image_url: string;
}
