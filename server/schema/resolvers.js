const { Bug } = require('../models');


const resolvers = { 
    Query: {
        getBugs: async () => {
            return Bug.find({})
        }
    }
}

module.exports = resolvers;