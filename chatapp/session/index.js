'use strict';

const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const config = require('../config');
const db = require('../db');

if(process.env.NODE_ENV === 'production') {
    //Initialize session with settings for production

    module.exports = session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: false,
        store: new mongoStore({
            mongooseConnection: db.mongoose.connection
        })
    });
   
} else {

    //initialize session with settings for development mode
    module.exports = session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: true
    });
}




