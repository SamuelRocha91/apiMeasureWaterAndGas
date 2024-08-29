import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import chaisAsPromised from 'chai-as-promised';
import app from '../server';
import  invalidMeasureType  from './mocks/measures.mock'
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
        const httpRequestBody = invalidMeasureType.invalidMeasureType;

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
