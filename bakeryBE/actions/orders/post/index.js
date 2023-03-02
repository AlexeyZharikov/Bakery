
// || '5665732602:AAFSyxzAD_kfLPujoIvWRaGEjuNqP2-DrVs';

// || '468615365';
const orderModel = require('../../../models').orderModel;
const TelegramBot = require('node-telegram-bot-api');



const createOrder = (req, res) => {
  const chatId = process.env.CHAT_ID 
  const token = process.env.TOKEN 
  const bot = new TelegramBot(token, {
    polling: true
  });

  const {orderNum, items, total, clientName, clientPhone, clientEmail} = req.body

  const newOrder = new orderModel({
    orderNum, 
    items, total, 
    clientName, 
    clientPhone, 
    clientEmail
  })

  return newOrder
  .save()
  .then(() => {
    
    let order = `Замовлення №: ${newOrder.orderNum}, Товари: ${newOrder.items.map(item => {
      return ` назва: ${item.title}, кількість: ${item.count}, ціна за шт: ${item.price}`
    })}, Загальна сума: ${newOrder.total}UAH, Телефон: ${newOrder.clientPhone}, Імʼя: ${newOrder.clientName}`
    order ? bot.sendMessage(chatId, order) : console.log(error);
    
  })
  .then(() => res.status(201).json('Order added'))
  .catch((err) => res.status(500).json(err.message));

  
}

module.exports = createOrder

