const mongoose = require('mongoose');

const { Schema } = mongoose;

const SeaCreaturesSchema = new Schema({
    name: {
        type: String,
    },
    availability: {
        monthNorthern: [{type: Number}],
        monthSouthern: [{type: Number}],
        time: [{type: Number}]
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
    icon: {
        type: String
    }

});

const SeaCreatures = mongoose.model('SeaCreatures', SeaCreaturesSchema);

module.exports = SeaCreatures;