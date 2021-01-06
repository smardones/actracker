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
    }
`;

export const QUERY_FISH = gql`
    query {
        getFish {
            _id
            name
            price
            priceCj
            description
            image
            icon
            shadowSize
            availability {
                monthNorthern
                monthSouthern
                time
         }
    }
  }`
;