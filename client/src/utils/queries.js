import gql from 'graphql-tag';

export const QUERY_BUGS = gql`
    query {
        getBugs {
            _id
            name
            price
            priceFlick
            description
            image
            icon
            availability {
                monthNorthern
                monthSouthern
                time
            }
        },

        getFish {
            _id
            name
            price
            priceCj
            shadow
            description
            image
            icon
            availability {
                monthNorthern
                monthSouthern
                time
            }
        }
    }
`;