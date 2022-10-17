const { productsModel } = require('../models');

const getAllService = async () => {
  const [result] = await productsModel.getAll();
  return result;
};

const getByIdService = async (productId) => {
  const [[result]] = await productsModel.getById(productId);
    return result || false;
};

const createProduct = async (product) => {
  const result = await productsModel.insertName(product.name);
  return result;
};

module.exports = {
  getAllService,
  getByIdService,
  createProduct,
};
