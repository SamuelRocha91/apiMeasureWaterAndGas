import prismaClient from "../db/prismaClient";

export default class CustomerModel {
  private prismaClient = prismaClient;

  async create(value): Promise<ICreateMeasure> {
    const data = await this.prismaClient.customer.create({
      data: value
    });
       
    return data;
  }

}