const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
  },
  description: {
      type: String,

  },
  image: {
      type: String
  },
  price: {
      type: Number
},
  
}, { timestamps: true });

const Blog = mongoose.model('Product', productSchema);
module.exports = Blog;