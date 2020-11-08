const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Bug {
        _id: ID
        name: String
        availability: BugAvailability
        price: Int
        priceFlick: Int
        description: String
        image: String
        icon: String
    }

    type BugAvailability {
        monthNorthern: String
        monthSouthern: String
        time: String
        monthNorthernArray: [Int]
        monthSouthernArray: [Int]
        timeArray: [Int]
    }

    type Query {
        getBugs: [Bug]
    }

`;

module.exports = typeDefs;