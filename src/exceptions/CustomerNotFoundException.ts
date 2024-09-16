import NotFoundException from "./NotFoundException";

export default class CustomerNotFoundException extends NotFoundException {
  constructor(typeError: string, message: string) {
    super(typeError, message);
  }
}
