import { Request, Response, NextFunction } from "express";
import { httpStatus } from "../utils/httpStatus.utils";
import CustomerService from "../services/customerService";

export default class CustomerController {

  constructor(
    private customerService = new CustomerService()
  ) { }

  public async create(req: Request, res: Response, next: NextFunction
  ) {
    try {
      const data = req.body;

      const response = await this.customerService.create(data);
      return res.status(httpStatus.CREATED).json(
        {
          customerCode: response.message
        }
      );
    } catch (error) {
      return next(error);
    }
  }

}