export interface IMeasure {
    image: string,
    customerCode: string,
    measureDatetime: string,
    measureType: "WEATHER" | "GAS"
}