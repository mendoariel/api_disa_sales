const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const salesSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: true
    }

}, {timestamps: true});

const Sales = mongoose.model('Sales', salesSchema)

module.exports = Sales;


