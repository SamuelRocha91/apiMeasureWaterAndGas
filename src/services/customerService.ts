import { ICreateCustomer } from "../interfaces/ICreateCustomer";
import { ServiceResponse } from "../interfaces/IServiceResponse";
import CustomerModel from "../models/customerModel";

export default class CustomerService {
  constructor(
    private customerModel = new CustomerModel()
  ) { }

  public async create(data: ICreateCustomer): Promise<ServiceResponse<string>> {
    const customerSave = await this.customerModel.create(data);

    return { status: "SUCCESSFUL", message: customerSave };
  }
}