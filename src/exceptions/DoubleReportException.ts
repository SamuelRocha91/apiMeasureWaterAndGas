import { httpStatus } from "../utils/httpStatus.utils";
import BaseError from "./BaseError";

export default class DoubleReportException extends BaseError {
  constructor(typeError: string, message: string) {
    super(httpStatus.CONFLICT, typeError, message);
  }
}
