import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import chaisAsPromised from 'chai-as-promised';
import app from '../server';
import  mockMeasure  from './mocks/measures.mock'
import { httpStatus } from '../utils/httpStatus.utils';

chai.use(chaisAsPromised);
chai.use(chaiHttp);

describe('POST /upload', function () {
  beforeEach(function () {
    sinon.restore();
  });
    
  describe('Testes de middlewares', function () {
    it('ao receber uma requisição com um tipo de medição incorreto, retorne um erro',
      async function () {
        // Arrange
        const httpRequestBody = mockMeasure.invalidMeasureType;

        //Act
        const httpResponse = await chai
          .request(app)
          .post('/upload')
          .send(httpRequestBody);

        //Assert
        expect(httpResponse.status).to.equal(httpStatus.BAD_REQUEST);
        expect(httpResponse.body.error_code).to.equal("INVALID_DATA");
        expect(httpResponse.body.error_description)
          .to.equal("Os dados fornecidos no corpo da requisição são inválidos");
      })    
    it('ao receber uma requisição com uma imagem base64 incorreta, retorne um erro',
      async function () {
        // Arrange
        const httpRequestBody = mockMeasure.invalidImageBase64;

        //Act
        const httpResponse = await chai
          .request(app)
          .post('/upload')
          .send(httpRequestBody);

        //Assert
        expect(httpResponse.status).to.equal(httpStatus.BAD_REQUEST);
        expect(httpResponse.body.error_code).to.equal("INVALID_DATA");
        expect(httpResponse.body.error_description)
          .to.equal("Os dados fornecidos no corpo da requisição são inválidos");
      })    
  })
})
