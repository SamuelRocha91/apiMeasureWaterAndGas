import BaseError from "./BaseError";
import { httpStatus } from "../utils/httpStatus.utils";

export default class InternalServerException extends BaseError {
  constructor(err: Error) {
    super(httpStatus.INTERNAL_SERVER_ERROR, "SERVER_ERROR", "Internal server error");
    
    console.error({
      message: err.message,
      stackTrace: err.stack,
      level: "fatal"
    });
  }
}
