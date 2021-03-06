'use strict';

module.exports = {
    port: '5000',
    url: 'mongodb://localhost:27017/elm',
    session: {
        name: 'SID',
        secret: 'SID',
        httpOnly: true,
        secure: false,
        maxAge: 365 * 24 * 60 * 60 * 1000,
    }
}