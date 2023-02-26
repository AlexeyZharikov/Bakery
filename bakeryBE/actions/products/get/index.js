const productModel = require('../../../models').productModel;

const getProduct = (req, res) => {

  const { id } = req.query;

  if (id) {
    return productModel
    .findById(id)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json(err));
  }

  return productModel
  .find()
  .then((products) => res.status(200).json(products))
  .catch((err) => res.status(500).json(err));
  

}


module.exports = getProduct;