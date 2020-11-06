const mongoose = require('mongoose');

const { Schema } = mongoose;

const HousewaresSchema = new Schema({
    name: {
        type: String,
    },
    source: {
        type: String
    },
    price: {
        type: Number,
    },
    sellPrice: {
        type: Number
    },
    image: {
        type: String
    },

});

const Housewares = mongoose.model('Housewares', HousewaresSchema);

module.exports = Housewares;