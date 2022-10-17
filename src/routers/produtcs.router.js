const express = require('express');
const { productsController } = require('../controllers');
const { validateProductName } = require('../middlewares');

const router = express.Router();

router.get('/', productsController.getAllController);

router.get('/:id', productsController.getByIdController);

router.post('/', validateProductName, productsController.createNewProduct);

module.exports = router;
