export interface IMeasure {
    image: string,
    customerCode: string,
    measureDatetime: Date,
    measureType: "WEATHER" | "GAS"
}