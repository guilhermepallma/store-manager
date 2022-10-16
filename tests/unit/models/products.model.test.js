const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/database/connection');
const { products, productId } = require('./mocks/products.model.mock');

describe('Teste da camada Model', function () {
  afterEach(sinon.restore);

  it('Testa se é chamado todos os produtos do banco de dados', async function () {
    sinon.stub(connection, 'execute').resolves([products])
    const result = await productsModel.getAll();
    expect(result).to.deep.equal([products])
  });

    it('Testa se é chamado todos os produtos do banco de dados', async function () {
    sinon.stub(connection, 'execute').resolves([productId])
    const result = await productsModel.getById();
    expect(result).to.deep.equal([productId])
  });
});
