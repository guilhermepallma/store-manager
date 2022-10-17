const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.getAllController);

router.get('/:id', productsController.getByIdController);

router.post('/', productsController.createNewProduct);

module.exports = router;
