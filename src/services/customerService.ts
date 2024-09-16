import { ServiceResponse } from "../interfaces/IServiceResponse";
import CustomerModel from "../models/customerModel";

export default class CustomerService {
  constructor(
    private customerModel = new CustomerModel()
  ) { }

  public async create(data: ICustomer): Promise<ServiceResponse<ICreateCustomer>> {
    const customerSave = await this.customerModel.create(data);

    return { status: "SUCCESSFUL", message: customerSave };
  }
}