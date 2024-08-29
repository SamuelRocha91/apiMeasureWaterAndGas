import { image1Base64 } from "../images/image1"

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
export default {
  invalidMeasureType,
  invalidCustomerCode,
  invalidImageBase64,
  invalidMeasureDate,
  validMeasure
}