import { image1Base64 } from "../images/image1"
import { getImageUrl } from "../../utils/image.utils"

const invalidMeasureType = {
  "image": image1Base64,
  "customer_code": "d1d21ce1-9020-4041-9502-7dd2b4e29220",
  "measure_datetime": "2024-08-28T14:35:21.000Z",
  "measure_type": "xabu"
}

const invalidImageBase64 = {
  "image": "data.xablau,554545454545454",
  "customer_code": "d1d21ce1-9020-4041-9502-7dd2b4e29220",
  "measure_datetime": "2024-08-28T14:35:21.000Z",
  "measure_type": "GAS"
}

const invalidMeasureDate = {
  "image": image1Base64,
  "customer_code": "d1d21ce1-9020-4041-9502-7dd2b4e29220",
  "measure_datetime": "11/05/2025",
  "measure_type": "GAS"
}

const invalidCustomerCode = {
  "image": image1Base64,
  "customer_code": "",
  "measure_datetime": "2024-08-28T14:35:21.000Z",
  "measure_type": "GAS"
}

const validMeasure = {
  "image": image1Base64,
  "customer_code": "d1d21ce1-9020-4041-9502-7dd2b4e29220",
  "measure_datetime": "2024-08-28T14:35:21.000Z",
  "measure_type": "GAS"
}

const validMeasureCamelCase = {
  "image": image1Base64,
  "customerCode": "d1d21ce1-9020-4041-9502-7dd2b4e29220",
  "measureDatetime": new Date("2024-08-28T14:35:21.000Z"),
  "measureType": "GAS"
}

const validMeasureDateNew = {
  "image": image1Base64,
  "customerCode": "d1d21ce1-9020-4041-9502-7dd2b4e29220",
  "measureDatetime": new Date("2024-12-28T14:35:21.000Z"),
  "measureType": "GAS"
}

const measureSaved = {
  imageUrl: "d1d21ce1-9020-4041-9502-7dd2b4e29220_WATER_1724876616987.png",
  measureValue: 292,
  measureUuid: "d1d21ce1 - 9020 - 4041 - 9502 - 7dd2b4e29220"
}

const measureSaveds = [
  {
    measureDatetime: new Date("2024-08-28T14:35:21.000Z")
  },
  {
    measureDatetime: new Date("2024-07-28T14:35:21.000Z")
  },
  {
    measureDatetime: new Date("2024-06-28T14:35:21.000Z")
  },
  {
    measureDatetime: new Date("2024-05-28T14:35:21.000Z")
  },
  {
    measureDatetime: new Date("2024-04-28T14:35:21.000Z")
  }
]

const measureConfirmValid = {
  measure_uuid: "d1d21ce1-9020-4041-9502-7dd2b4e29220",
  confirmed_value: 292
}

const measureConfirmValidCamelCase = {
  measureUuid: "d1d21ce1-9020-4041-9502-7dd2b4e29220",
  measureValue: 292
}

const measureConfirmUuidInvalid = {
  measure_uuid: "",
  confirmed_value: 292
}

const measureConfirmValueInvalid = {
  measure_uuid: "d1d21ce1-9020-4041-9502-7dd2b4e29220",
  confirmed_value: "292"
}

const listMeasures = [
  {
    measureUuid: "d1d21ce1-9020-4041-9502-7dd2b4e29220",
    measureType: "GAS",
    measureDatetime: new Date("2024-04-28T14:35:21.000Z"),
    hasConfirmed: true,
    image: {
      imagePath: "d1d21ce1-9020-4041-9502-7dd2b4e29220_WATER_1724876616987.png"
    }
  }
]

const objectResponse = {
  customer_code: "d1d21ce1-9020-4041-9502-7dd2b4e29220",
  measure: [
    {
      measure_uuid: "d1d21ce1-9020-4041-9502-7dd2b4e29220",
      measure_type: "GAS",
      measure_datetime: "2024-04-28T14:35:21.000Z",
      has_confirmed: true,
      image_url: getImageUrl("d1d21ce1-9020-4041-9502-7dd2b4e29220_WATER_1724876616987.png")
    }
  ]
}

export default {
  invalidMeasureType,
  invalidCustomerCode,
  invalidImageBase64,
  invalidMeasureDate,
  validMeasure,
  validMeasureCamelCase,
  validMeasureDateNew,
  measureSaved,
  measureSaveds,
  measureConfirmValid,
  measureConfirmValidCamelCase,
  measureConfirmValueInvalid,
  measureConfirmUuidInvalid,
  listMeasures,
  objectResponse
}