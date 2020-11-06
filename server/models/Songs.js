const mongoose = require('mongoose');

const { Schema } = mongoose;

const SongSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    sellPrice: {
        type: Number
    },
    image: {
        type: String
    }

});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;