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

    type Fish {
        _id: ID
        name: String
        availability: FishAvailability
        price: Int
        priceCj: Int
        description: String
        image: String
        icon: String
        shadowSize: String
    }

    type FishAvailability {
        monthNorthern: String
        monthSouthern: String
        time: String
    }

    type Fossil {
        _id: ID
        name: String
        price: Int
        description: String
        image: String
    }

    type SeaCreature {
        _id: ID
        name: String
        price: Int
        description: String
        icon: String
        image: String
        availability: SeaCreatureAvailability
    }

    type SeaCreatureAvailability {
        monthNorthern: String
        monthSouthern: String
        time: String
    }

    type Art {
        _id: ID
        name: String
        price: Int
        sellValue: Int
        description: String
        image: String
    }

    type Auth {
        user: User
        token: ID!
    }

    type Query {
        users: [User]
        getBugs: [Bug]
        getFish: [Fish]
        getFossils: [Fossil]
        getSeaCreatures: [SeaCreature]
        getArt: [Art]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth

    }

`;

module.exports = typeDefs;