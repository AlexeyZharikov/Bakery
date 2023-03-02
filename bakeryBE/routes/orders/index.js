const ordersRouter = require('express').Router();
const createOrder = require('../../actions').orders.createOrder;

ordersRouter.post('/', createOrder);


module.exports = ordersRouter;

