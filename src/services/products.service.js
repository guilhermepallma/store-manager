const { productsModel } = require('../models');

const getAll = async () => {
  const [result] = await productsModel.selectGetAll();
  return result;
};

const getById = async (productId) => {
  const [[result]] = await productsModel.selectGetById(productId);
    return result || false;
};

const createProduct = async (product) => {
  const result = await productsModel.insertName(product.name);
  return result;
};

module.exports = {
  getAll,
  getById,
  createProduct,
};
