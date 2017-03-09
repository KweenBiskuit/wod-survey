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
        db: 'postgres://hdwpzsvyqtiljc:9ae9516e094fc63e19191450088cfa2101332f2b6124d90a5f6a66b73e3845e3@ec2-54-221-244-196.compute-1.amazonaws.com/d55e6762k6ce3k'
            // root:password
    },

    test: {
        root: rootPath,
        app: {
            name: 'wod-survey'
        },
        port: process.env.PORT || 3000,
        db: 'postgres://hdwpzsvyqtiljc:9ae9516e094fc63e19191450088cfa2101332f2b6124d90a5f6a66b73e3845e3@ec2-54-221-244-196.compute-1.amazonaws.com/d55e6762k6ce3k'
    },

    production: {
        root: rootPath,
        app: {
            name: 'wod-survey'
        },
        port: process.env.PORT || 3000,
        db: 'postgres://hdwpzsvyqtiljc:9ae9516e094fc63e19191450088cfa2101332f2b6124d90a5f6a66b73e3845e3@ec2-54-221-244-196.compute-1.amazonaws.com/d55e6762k6ce3k'
    }
};

module.exports = config[env];