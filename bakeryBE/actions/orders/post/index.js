const orderModel = require('../../../models').orderModel;
const TelegramBot = require('node-telegram-bot-api');



const createOrder = (req, res) => {
  const chatId1 = process.env.CHAT_ID1 
  const chatId2 = process.env.CHAT_ID2
  const token = process.env.TOKEN 
  const bot = new TelegramBot(token, {
    polling: false
  });

  const {orderNum, items, total, clientName, clientPhone, clientEmail, clientComment} = req.body

  const newOrder = new orderModel({
    orderNum, 
    items, total, 
    clientName, 
    clientPhone, 
    clientEmail,
    clientComment
  })

  return newOrder
  .save()
  .then(() => {
    let order = `Замовлення №: ${newOrder.orderNum}, Дата та час: ${(new Date()).toLocaleDateString() + ' ' +(new Date()).toLocaleTimeString()}, Товари: [ ${newOrder.items.map(item => {
      return `{ назва: ${item.title}, кількість: ${item.count}, ціна: ${item.price}}`
    })}], Загальна сума: ${newOrder.total}UAH, Телефон: ${newOrder.clientPhone}, Імʼя: ${newOrder.clientName}, коментар: ${newOrder.clientComment}`
    return order ? bot.sendMessage(chatId1, order) : console.log(error);
  })
  .then(() => {
    let order = `Замовлення №: ${newOrder.orderNum}, Дата та час: ${(new Date()).toLocaleDateString() + ' ' +(new Date()).toLocaleTimeString()}, Товари: [ ${newOrder.items.map(item => {
      return `{ назва: ${item.title}, кількість: ${item.count}, ціна: ${item.price}}`
    })}], Загальна сума: ${newOrder.total} грн., Телефон: ${newOrder.clientPhone}, Імʼя: ${newOrder.clientName}, коментар: ${newOrder.clientComment}`
    return order ? bot.sendMessage(chatId2, order) : console.log(error);
  })
  .then(() => res.status(201).json('Order added'))
  .catch((err) => res.status(500).json(err.message));

  
}

module.exports = createOrder

