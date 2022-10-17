const { productsService } = require('../services');

const getAllController = async (_request, response) => {
  const result = await productsService.getAllService();
  return response.status(200).json(result);
};

const getByIdController = async (request, response) => {
  const { id } = request.params;
  const result = await productsService.getByIdService(id);

  if (result) {
    return response.status(200).json(result);
  }
    return response.status(404).json({ message: 'Product not found' });
};

const createNewProduct = async (request, response) => {
  const productName = request.body;
  const result = await productsService.createProduct(productName);

  response.status(201).json(result);
};

module.exports = {
  getAllController,
  getByIdController,
  createNewProduct,
};
