const ordersRouter = require('express').Router();
const createOrder = require('../../actions').orders.createOrder;
const getOrders = require('../../actions').orders.getOrders;

ordersRouter.post('/', createOrder);
ordersRouter.get('/', getOrders);


module.exports = ordersRouter;

