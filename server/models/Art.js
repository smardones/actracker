const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    sellValue: {
        type: Number
    },
    description: {
        type: String
    }

});

const Art = mongoose.model('Art', ArtSchema);

module.exports = Art;