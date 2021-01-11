const { Bug, User, Fish, Fossil } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = { 
    Query: {
        getBugs: async () => {
            return Bug.find({})
        },

        getFish: async () => {
            return Fish.find({})
        },
        
        getFossils: async () => {
            return Fossil.find({})
        },

        users: async () => {
            return User.find({})
        }
    },

    Mutation: {
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            
            return {token, user};
        },

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { user, token };
        }
    }
}

module.exports = resolvers;