const express = require('express');
const Router = express.Router();

const productController = require('../controllers/product');

Router.get('/', productController.getAllProducts);
Router.get('/:id', productController.getOneProduct);
Router.post('/order', productController.orderProducts);

module.exports = Router;