export default class BaseError extends Error {
  private readonly statusCode: number;
  private readonly typeError: string;

  constructor(statusCode: number, typeError: string, message: string) {
    super(message);
    this.typeError = typeError;
    this.statusCode = statusCode;
  }

  getBody() {
    return {
      message: this.message,
      typeError: this.typeError,  
      statusCode: this.statusCode
    };
  }
}