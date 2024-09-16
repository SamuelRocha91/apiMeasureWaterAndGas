import { Router } from "express";
import CustomerController from "../controllers/customerController";

const customerRouter = Router();
const customerController = new CustomerController();

customerRouter.route("/").post(
  customerController.create.bind(customerController)
);

export default customerRouter;
