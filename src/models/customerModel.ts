import prismaClient from "../db/prismaClient";
import { ICreateCustomer } from "../interfaces/ICreateCustomer";

export default class CustomerModel {
  private prismaClient = prismaClient;

  async create(value: ICreateCustomer): Promise<string> {
    const data = await this.prismaClient.customer.create({
      data: value,
      select: {
        customerUuid: true
      }
    });
       
    return data.customerUuid;
  }
}