var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'wod-survey'
        },
        port: process.env.PORT || 8080,
        // db: 'mysql://root@localhost/wod_surveys'
        db: 'mysql://wod:wodSurvey@localhost/wod'
            // root:password
    },

    test: {
        root: rootPath,
        app: {
            name: 'wod-survey'
        },
        port: process.env.PORT || 3000,
        db: 'mysql://localhost/wod-survey-test'
    },

    production: {
        root: rootPath,
        app: {
            name: 'wod-survey'
        },
        port: process.env.PORT || 3000,
        db: 'mysql://localhost/wod-survey-production'
    }
};

module.exports = config[env];