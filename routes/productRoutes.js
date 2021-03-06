const express = require('express')

//const blogController = require('../controllers/blogController')
const productController = require('../controllers/productController')


const router = express.Router();


router.get('/', productController.product_index);


module.exports = router;