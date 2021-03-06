const Product = require('../models/product')

const product_index = (req, res) => {
    Product.find().sort({ createdAt: -1 })
    .then(result => {
      res.send(result);
      //res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
}








module.exports = {
  product_index
}