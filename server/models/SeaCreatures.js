const mongoose = require('mongoose');

const { Schema } = mongoose;

const SeaCreaturesSchema = new Schema({
    name: {
        type: String,
    },
    availability: {
        monthNorthern: {type: String},
        monthSouthern: {type: String},
        time: {type: String}
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

const SeaCreature = mongoose.model('SeaCreature', SeaCreaturesSchema);

module.exports = SeaCreature;