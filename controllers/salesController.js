const Sales = require('../models/sales')

const sales_index = (req, res) => {
    Sales.find().sort({ createdAt: -1})
        .then(result => {
            res.send(result)
        })
        .catch(err => console.log(err))
}

module.exports = {
    sales_index
}