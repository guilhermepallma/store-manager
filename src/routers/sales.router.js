const express = require('express');
const { salesController } = require('../controllers');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAllSeles);

salesRouter.get('/:id', salesController.getByIdSales);

module.exports = salesRouter;
