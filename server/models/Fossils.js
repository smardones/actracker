const mongoose = require('mongoose');

const { Schema } = mongoose;

const FossilSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
});

const Fossil = mongoose.model('Fossil', FossilSchema);

module.exports = Fossil;