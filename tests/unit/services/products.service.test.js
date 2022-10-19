const { expect } = require('chai');
const sinon = require('sinon');


const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models')


const { allProducts, productId, newProductName } = require('./mock/products.service.mock');

describe('Teste unitário da camada Service', function () {
  afterEach(sinon.restore);

  it('Retorna todos os produtos do banco de dados', async function () {
    sinon.stub(productsModel, "selectGetAll").resolves([allProducts]);
    const result = await productsService.getAll();
    expect(result).to.deep.equal(allProducts)
  });

  it('Retorna um produto pelo Id', async function () {
    sinon.stub(productsModel, "selectGetById").resolves([[productId]]);
    const result = await productsService.getById(1);
    expect(result).to.deep.equal(productId);
  });

  it('Retorna "false" quando um produto não é encontrado', async function () {
    sinon.stub(productsModel, 'selectGetById').resolves([[]])
    const result = await productsService.getById(1);
    expect(result).to.deep.equal(false);
  });

  it('Retorna um produto cadastrado', async function () {
    sinon.stub(productsModel, 'insertName').resolves([[newProductName]])
    const result = await productsService.createProduct('Armadura do Homem de Ferro');
    expect(result).to.deep.equal([[newProductName]]);
  });
});
