const jwt = require('jsonwebtoken');

const secret = 'donttrustisabelle'
const expiration = '5h'

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = {username, email, _id};

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },

    authMiddleware: function({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization

        if (req.header.authorization) {
            token = token
                    .split(' ')
                    .pop()
                    .trim();
        }

        if (!token) {
            return req;
        }

        try {
            // decode and attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalide token')
        }

        // return updated request object
        return req;
    }
}
