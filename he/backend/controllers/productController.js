const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
  Product.getAll((err, products) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(products);
  });
};
