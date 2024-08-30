import { httpStatus } from "../utils/httpStatus.utils";
import BaseError from "./BaseError";

export default class InvalidDataException extends BaseError {
  constructor(typeError: string, message: string) {
    super(httpStatus.BAD_REQUEST, typeError, message);
  }
}
