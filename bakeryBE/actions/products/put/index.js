const productModel = require('../../../models').productModel;

const putProduct = (req, res) => {
  const { id } = req.query;
  const { title, photo, shortDescription, longDescription, price, discount, discountDescription, category, availability, alergic, alergicDecription, halal, kosher, vegan, raw, sugarFree, glutenFree } = req.body;

  return productModel
    .findById(id)
    .then((product) => {

      product.title = title,
        product.photo = photo,
        product.shortDescription = shortDescription,
        product.longDescription = longDescription,
        product.price = price,

        product.discount = discount,
        product.discountDescription = discountDescription,

        product.category = category,
        product.availability = availability,

        product.alergic = alergic,
        product.alergicDecription = alergicDecription,

        product.halal = halal,
        product.kosher = kosher,
        product.vegan = vegan,
        product.raw = raw,
        product.sugarFree = sugarFree,
        product.glutenFree = glutenFree


      return product
        .save()
        .then(() => res.status(200).json('Product updated'))
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));

}
module.exports = putProduct;