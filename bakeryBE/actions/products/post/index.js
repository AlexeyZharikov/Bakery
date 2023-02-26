const productModel = require('../../../models').productModel;

const postProduct = (req, res) => {
  const {
    title,
    photo,
    shortDescription,
    longDescription,
    price,
    category,
    availability,
    halal,
    kosher,
    vegan,
    raw,
    sugarFree,
    glutenFree
    
  } = req.body;

  const newProd = new productModel({
    title,
    photo,
    shortDescription,
    longDescription,
    price,
    category,
    availability,
    halal,
    kosher,
    vegan,
    raw,
    sugarFree,
    glutenFree
    
  })

  return newProd
    .save()
    .then(() => res.status(201).json('Product added'))
    .catch((err) => res.status(500).json(err.message));
}

module.exports = postProduct