const express = require('express');
const { productsController } = require('../controllers');
const { validateProductName } = require('../middlewares');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllController);

productsRouter.get('/:id', productsController.getByIdController);

productsRouter.post('/', validateProductName, productsController.createNewProduct);

module.exports = productsRouter;
