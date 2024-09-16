import { Router } from "express";

const customerRouter = Router();

customerRouter.route("/").post(
  customerController.create.bind(customerController)
);

export default customerRouter;
