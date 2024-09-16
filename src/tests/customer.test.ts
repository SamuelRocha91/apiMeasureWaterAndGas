import CustomerService from "../services/customerService";
import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import chaisAsPromised from "chai-as-promised";
import app from "../server";
import customerMock from "./mocks/customer.mock";
import { httpStatus } from "../utils/httpStatus.utils";
import CustomerModel from "../models/customerModel";

chai.use(chaisAsPromised);
chai.use(chaiHttp);

describe("POST /customer", function () {
  beforeEach(function () {
    sinon.restore();
  });
  describe("Testes de middlewares", function () {
    it("ao receber uma requisição com dados de cliente incorretos, retorne um erro",
      async function () {
        // Arrange
        const httpRequestBody = customerMock.customerDataInvalid;

        //Act
        const httpResponse = await chai
          .request(app)
          .post("/customer")
          .send(httpRequestBody);

        //Assert
        expect(httpResponse.status).to.equal(httpStatus.BAD_REQUEST);
        expect(httpResponse.body.error_code).to.equal("INVALID_DATA");
        expect(httpResponse.body.error_description)
          .to.equal("Dados incompletos ou inválidos");
      });
  });
  describe("Testes de controller", function () {
    it("ao receber dados corretos, retorna um status de sucesso", async function () {
      // Arrange
      const httpRequestBody = customerMock.customerDataValid;
      sinon.stub(CustomerService.prototype, "create").resolves({
        status: "SUCCESSFUL", message: "d1d21ce1-9020-4041-9502-7dd2b4e29220"
      });

      //Act
      const httpResponse = await chai
        .request(app)
        .post("/customer")
        .send(httpRequestBody);

      //Assert  
      expect(httpResponse.status).to.equal(httpStatus.CREATED);
      expect(httpResponse.body).to.deep.equal({
        customerCode: "d1d21ce1-9020-4041-9502-7dd2b4e29220"
      });
    });
  });

  describe("Testes de service", function () {
    it("ao receber dados corretos, retorna um status de sucesso", async function () {
      // Arrange
      const httpRequestBody = customerMock.customerDataValid;
      sinon.stub(CustomerModel.prototype, "create").resolves(
        "d1d21ce1-9020-4041-9502-7dd2b4e29220");

      //Act
      const response = await new CustomerService().create(httpRequestBody);
      //Assert  
      expect(response.status).to.equal("SUCCESSFUL");
      expect(response.message).to.equal(
        "d1d21ce1-9020-4041-9502-7dd2b4e29220"
      );
    });
  });
});
