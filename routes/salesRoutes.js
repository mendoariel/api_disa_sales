const express = require('express')

const salesController = require('../controllers/salesController')

const router = express.Router();

router.get('/sales', salesController.sales_index)

module.exports = router;