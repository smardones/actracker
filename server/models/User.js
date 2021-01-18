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
    bugCollection: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Bug'
        },
    ],
    fishCollection: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Fish'
        }
    ],
    seaCreatureCollection: [
        {
            type: Schema.Types.ObjectId,
            ref: 'SeaCreature'
        }
    ],
    fossilCollection: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Fossil'
        }
    ],
    artCollection: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Art'
        }
    ]
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

const User = mongoose.model('User', userSchema);

module.exports = User;