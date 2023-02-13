const productsRouter = require('express').Router();
const getProduct = require('../../actions').products.getProduct;
const postProduct = require('../../actions').products.postProduct;
const putProduct = require('../../actions').products.putProduct;
const deleteProduct = require('../../actions').products.deleteProduct;

productsRouter.get('/', getProduct);

productsRouter.post('/', postProduct);

productsRouter.put('/', putProduct);

productsRouter.delete('/', deleteProduct);

module.exports = productsRouter;