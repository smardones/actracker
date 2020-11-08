const mongoose = require('mongoose');

const { Schema } = mongoose;

const BugSchema = new Schema({
    name: {
        type: String,
    },
    availability: {
        monthNorthern: {type: String},
        monthSouthern: {type: String},
        time: {type: String},
        monthNorthernArray: [{type: Number}],
        monthSouthernArray: [{type: Number}],
        timeArray: [{type: Number}]
    },
    price: {
        type: Number,
    },
    priceFlick: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    icon: {
        type: String
    }

})

const Bug = mongoose.model('Bug', BugSchema);

module.exports = Bug;