import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import chaisAsPromised from 'chai-as-promised';
import app from '../server';
import  mockMeasure  from './mocks/measures.mock'
import { httpStatus } from '../utils/httpStatus.utils';
import MeasureService from '../services/measureService';
import MeasureModel from '../models/measureModel';
import { getImageUrl } from '../utils/image.utils';
import { IMeasure } from '../interfaces/IMeasure';
import * as imageUtils from '../utils/image.utils'
import * as googleApi from '../utils/gemini.utils'
import { IMeasureSummary } from '../interfaces/ICreateMeasure';

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
    it('ao receber uma requisição com um formato de data incorreto, retorne um erro',
      async function () {
        // Arrange
        const httpRequestBody = mockMeasure.invalidMeasureDate;

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
    it('ao receber uma requisição com um formato de customer uuid incorreto, retorne um erro',
      async function () {
        // Arrange
        const httpRequestBody = mockMeasure.invalidCustomerCode;

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
  describe('Testes de controller', function () {
    it('ao receber medição já cadastrada, retorne um erro', async function () {
    // Arrange
      const httpRequestBody = mockMeasure.validMeasure;
      sinon.stub(MeasureService.prototype, 'createMeasure').resolves({
        status: 'DOUBLE_REPORT', message: "Leitura do mês já realizada"
      });
    
      //Act
      const httpResponse = await chai
        .request(app)
        .post('/upload')
        .send(httpRequestBody);
        
      //Assert  
      expect(httpResponse.status).to.equal(httpStatus.CONFLICT);
      expect(httpResponse.body.error_code).to.equal('DOUBLE_REPORT');
      expect(httpResponse.body.error_description)
        .to.equal("Leitura do mês já realizada");
    })  
      
    it('ao receber medição nova, retorna status CREATED e dados da medição', async function () {
      // Arrange
      const httpRequestBody = mockMeasure.validMeasure;
      sinon.stub(MeasureService.prototype, 'createMeasure').resolves({
        status: 'SUCCESSFUL', message: mockMeasure.measureSaved
      });
      const url = getImageUrl(mockMeasure.measureSaved.imageUrl);

      //Act
      const httpResponse = await chai
        .request(app)
        .post('/upload')
        .send(httpRequestBody);

      //Assert  
      expect(httpResponse.status).to.equal(httpStatus.CREATED);
      expect(httpResponse.body.measure_value).to.equal(mockMeasure.measureSaved.measureValue);
      expect(httpResponse.body.measure_uuid).to.equal(mockMeasure.measureSaved.measureUuid);
      expect(httpResponse.body.image_url).to.equal(url);
    })  
  })
    
  describe('Testes de service', async function () {
    const measureService = new MeasureService();
    const value = 292;
    const path = "d1d21ce1-9020-4041-9502-7dd2b4e29220_WATER_1724876616987.png";
    it('ao verificar a existência medição para o mesmo período, retorna status de DOUBLE_REPORT',
      async function () {
        // Arrange
        sinon.stub(MeasureModel.prototype, 'findAllByCode').resolves(mockMeasure.measureSaveds);

        //Act
        const serviceResponse = await measureService
          .createMeasure(mockMeasure.validMeasureCamelCase as IMeasure)

        //Assert  
        expect(serviceResponse.status).to.equal('DOUBLE_REPORT');
        expect(serviceResponse.message).to.equal("Leitura do mês já realizada");
      })
      
    it('quando os dados são processados corretamente, retorna status de SUCCESSFUL',
      async function () {
        // Arrange
        sinon.stub(MeasureModel.prototype, 'findAllByCode').resolves(mockMeasure.measureSaveds);
        sinon.stub(imageUtils, 'extractMimeType').resolves('image/png');
        sinon.stub(imageUtils, 'extractSize').resolves(1);
        sinon.stub(imageUtils, 'saveBase64Image')
          .resolves(path);
        sinon.stub(googleApi, 'default').resolves(value);
        sinon.stub(MeasureModel.prototype, 'create').resolves(mockMeasure.measureSaved);
        //Act
        const serviceResponse = await measureService
          .createMeasure(mockMeasure.validMeasureDateNew as IMeasure)

        //Assert  
        expect(serviceResponse.status).to.equal('SUCCESSFUL');
        expect(serviceResponse.message).to.equal(mockMeasure.measureSaved);
      })
  })
})

describe('PATCH /confirm', function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe('Testes de middlewares', function () {
    it('ao receber uma requisição com um measureUuid incorreto, retorne um erro',
      async function () {
        // Arrange
        const httpRequestBody = mockMeasure.measureConfirmUuidInvalid;

        //Act
        const httpResponse = await chai
          .request(app)
          .patch('/confirm')
          .send(httpRequestBody);

        //Assert
        expect(httpResponse.status).to.equal(httpStatus.BAD_REQUEST);
        expect(httpResponse.body.error_code).to.equal("INVALID_DATA");
        expect(httpResponse.body.error_description)
          .to.equal("Os dados fornecidos no corpo da requisição são inválidos");
      })
    it('ao receber uma confirmação de valor inválida, retorne um erro',
      async function () {
        // Arrange
        const httpRequestBody = mockMeasure.measureConfirmValueInvalid;

        //Act
        const httpResponse = await chai
          .request(app)
          .patch('/confirm')
          .send(httpRequestBody);

        //Assert
        expect(httpResponse.status).to.equal(httpStatus.BAD_REQUEST);
        expect(httpResponse.body.error_code).to.equal("INVALID_DATA");
        expect(httpResponse.body.error_description)
          .to.equal("Os dados fornecidos no corpo da requisição são inválidos");
      })
  })
  describe('Testes de controller', function () {
    it('ao receber medição não cadastrada para confirmação, retorne um erro', async function () {
    // Arrange
      const httpRequestBody = mockMeasure.measureConfirmValid;
      sinon.stub(MeasureService.prototype, 'confirmMeasure').resolves({
        status: 'MEASURE_NOT_FOUND', message: "Leitura não encontrada"
      });

      //Act
      const httpResponse = await chai
        .request(app)
        .patch('/confirm')
        .send(httpRequestBody);

      //Assert  
      expect(httpResponse.status).to.equal(httpStatus.NOT_FOUND);
      expect(httpResponse.body.error_code).to.equal('MEASURE_NOT_FOUND');
      expect(httpResponse.body.error_description)
        .to.equal("Leitura não encontrada");
    })
    it('ao receber medição já confirmada, retorne um erro', async function () {
      // Arrange
      const httpRequestBody = mockMeasure.measureConfirmValid;
      sinon.stub(MeasureService.prototype, 'confirmMeasure').resolves({
        status: 'CONFIRMATION_DUPLICATE', message: "Leitura do mês já realizada"
      });

      //Act
      const httpResponse = await chai
        .request(app)
        .patch('/confirm')
        .send(httpRequestBody);

      //Assert  
      expect(httpResponse.status).to.equal(httpStatus.CONFLICT);
      expect(httpResponse.body.error_code).to.equal('CONFIRMATION_DUPLICATE');
      expect(httpResponse.body.error_description)
        .to.equal("Leitura do mês já realizada");
    })

    it('ao receber dados corretos para confirmação, retorna status de sucesso', async function () {
      // Arrange
      const httpRequestBody = mockMeasure.measureConfirmValid;
      sinon.stub(MeasureService.prototype, 'confirmMeasure')
        .resolves({ status: 'SUCCESSFUL', message: 'ok' });
    
      //Act
      const httpResponse = await chai
        .request(app)
        .patch('/confirm')
        .send(httpRequestBody);

      //Assert  
      expect(httpResponse.status).to.equal(httpStatus.OK);
      expect(httpResponse.body).to.deep.equal({
        success: true
      });
    })
  })

  describe('Testes de service', async function () {
    const measureService = new MeasureService();

    it('ao verificar a inexistência da medição, retorna status de MEASURE_NOT_FOUND',
      async function () {
        // Arrange
        sinon.stub(MeasureModel.prototype, 'findMeasureByUuid').resolves(undefined);

        //Act
        const serviceResponse = await measureService
          .confirmMeasure(mockMeasure.measureConfirmValidCamelCase as IMeasureSummary)

        //Assert  
        expect(serviceResponse.status).to.equal('MEASURE_NOT_FOUND');
        expect(serviceResponse.message).to.equal("Leitura não encontrada");
      })
      
    it('ao verificar a inexistência da medição, retorna status de MEASURE_NOT_FOUND',
      async function () {
        // Arrange
        sinon.stub(MeasureModel.prototype, 'findMeasureByUuid').resolves({ hasConfirmed: true });

        //Act
        const serviceResponse = await measureService
          .confirmMeasure(mockMeasure.measureConfirmValidCamelCase as IMeasureSummary)

        //Assert  
        expect(serviceResponse.status).to.equal('CONFIRMATION_DUPLICATE');
        expect(serviceResponse.message).to.equal("Leitura do mês já realizada");
      })

    it('ao verificar a correção dos dados, retorna status de SUCCESSFUL',
      async function () {
        // Arrange
        sinon.stub(MeasureModel.prototype, 'findMeasureByUuid').resolves({ hasConfirmed: false });
        sinon.stub(MeasureModel.prototype, 'confirmMeasure').resolves(undefined);
        //Act
        const serviceResponse = await measureService
          .confirmMeasure(mockMeasure.measureConfirmValidCamelCase as IMeasureSummary)

        //Assert  
        expect(serviceResponse.status).to.equal('SUCCESSFUL');
        expect(serviceResponse.message).to.equal('ok');
      })
  })
})
