const productModel = require('../../../models').productModel;

const deleteProduct = (req, res) => {
  const {id} = req.query;
  return productModel.
  findByIdAndDelete(id)
  .then(() => res.status(200).json('Deleted'))
  .catch((err) => res.status(500).json(err));
}

module.exports = deleteProduct;