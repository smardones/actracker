const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(em) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(em)
            },
            message: 'Please provide a valid email address'
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    islandName: {
        type: String
    },
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;