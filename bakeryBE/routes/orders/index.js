const ordersRouter = require('express').Router();
const createOrder = require('../../actions').orders.createOrder;
const getOrders = require('../../actions').orders.getOrders;
const deleteOrder = require('../../actions').orders.deleteOrder;

ordersRouter.post('/', createOrder);
ordersRouter.get('/', getOrders);
ordersRouter.delete('/', deleteOrder);


module.exports = ordersRouter;

