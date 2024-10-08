import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerDocument from "./swagger.json";
import path from "path";
import cors from "cors";
import measuresRouter from "./routes/measureRoutes";
import confirmMeasuresRouter from "./routes/confirmMeasureRoutes";
import listMeasuresRouter from "./routes/listMeasuresRouter";
import customerRouter from "./routes/customerRoutes";
import ErrorHandler from "./middlewares/errorHandler";

const app = express();

const options = {
  definition: swaggerDocument,
  apis: ["./src/routes/*.ts"]
};

const swaggerSpec = swaggerJsdoc(options);

app.use(cors());

app.use(express.json({ limit: "10mb" }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/:customerCode/list", listMeasuresRouter);

app.use("/customer", customerRouter);

app.use("/confirm", confirmMeasuresRouter);

app.use("/upload", measuresRouter);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(ErrorHandler);

app.get("/", (_req: Request, res: Response) =>
  res.json({ message: "active server" })
);

export default app;
