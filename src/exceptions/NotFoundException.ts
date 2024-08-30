import { httpStatus } from "../utils/httpStatus.utils";
import BaseError from "./BaseError";

export default class NotFoundException extends BaseError {
  constructor(typeError: string, message: string) {
    super(httpStatus.NOT_FOUND, typeError, message);
  }
}
