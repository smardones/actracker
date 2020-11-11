const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bugCollection: [Bug]
    }

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

    type Auth {
        user: User
        token: ID!
    }

    type Query {
        users: [User]
        getBugs: [Bug]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth

    }

`;

module.exports = typeDefs;