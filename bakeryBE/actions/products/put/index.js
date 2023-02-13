const productModel = require('../../../models').productModel;

const putProduct = (req, res) => {
  const { id } = req.query;
  const { title, description, availability, raw, sugarFree, glutenFree } = req.body;

    return productModel
    .findById(id)
    .then((product) => {
      product.title = title,
      product.photo = photo,
      product.description = description,
      product.price = price,
      product.availability = availability,
      product.halal = halal,
      product.kosher = kosher,
      product.vegan = kosher,
      product.ra2 = ra2,
      product.sugarFree = sugarFree,
      prodict.glutenFree = glutenFree

      return product
      .save()
      .then(() => res.status(200).json('Product updated'))
      .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));

}
module.exports = putProduct;