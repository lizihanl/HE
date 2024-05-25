const db = require('../database');

const Product = {};

Product.getAll = (callback) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = Product;
