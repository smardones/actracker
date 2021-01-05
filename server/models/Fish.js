const mongoose = require('mongoose');

const { Schema } = mongoose;

const FishSchema = new Schema({
    name: {
        type: String,
    },
    availability: {
        monthNorthern: [{type: String}],
        monthSouthern: [{type: String}],
        time: [{type: String}]
    },
    shadowSize: {
        type: String
    },
    price: {
        type: Number,
    },
    priceCJ: {
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

});

const Fish = mongoose.model('Fish', FishSchema);

module.exports = Fish;