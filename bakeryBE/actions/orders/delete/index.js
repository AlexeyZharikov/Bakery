const orderModel = require('../../../models').orderModel;

const deleteOrder = (req, res) => {
  const {id} = req.query;
  return orderModel.
  findByIdAndDelete(id)
  .then(() => res.status(200).json('Deleted'))
  .catch((err) => res.status(500).json(err));
}

module.exports = deleteOrder;