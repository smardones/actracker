const mongoose = require('mongoose');

const { Schema } = mongoose;

const WallMountedSchema = new Schema({
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

const WallMounted = mongoose.model('WallMounted', WallMountedSchema);

module.exports = WallMounted;