const mongoose = require('mongoose');

const { Schema } = mongoose;

const MiscSchema = new Schema({
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

const Misc = mongoose.model('Misc', MiscSchema);

module.exports = Misc;