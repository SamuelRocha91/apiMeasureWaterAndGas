import { Router } from "express";
import CustomerController from "../controllers/customerController";
import { validatePostContentCustomer } from "../middlewares/customer/validatePostContent";
import { validatePostCustomer } from "../middlewares/customer/validatePostCustomer";
import { validateTypePostCustomer } from "../middlewares/customer/validateTypePostCustomer";

const customerRouter = Router();
const customerController = new CustomerController();

customerRouter.route("/").post(
  validatePostCustomer,
  validateTypePostCustomer,
  validatePostContentCustomer,
  customerController.create.bind(customerController)
);

export default customerRouter;
