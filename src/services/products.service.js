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

const updateProductName = async (name, id) => {
  const [[getProductId]] = await productsModel.selectGetById(id);
  await productsModel.updateName(name, id);

  if (!getProductId) {
    return {
      code: 404, message: { message: 'Product not found' },
    };
  }
  return { code: 200, message: { id, name } };
};

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProductName,
};
