var express = require('express'),
    router = express.Router();
db = require('../models');

module.exports = function(app) {
    app.use('/', router);
};

/* CREATE the tables ------------- */
router.get('/db/create', function(req, res, next) {
    db.sequelize
        .sync()
        .then(function() {
            res.status(200);
            res.send("Create the tables of the databases. OK")
        }).catch(function(e) {
            // throw new Error(e);
            //console.log(e);
        });
});


/* DROP the tables ------------- */
router.get('/db/drop', function(req, res, next) {
    db.sequelize.query(
        "drop schema public cascade; create schema public;"
    ).spread(function(results, metadata) {
        //console.log("everything went fine")
    }).catch(function(e) {
        //console.log(e);
    })

    res.status(200);
    res.send("Drop the tables of the databases. OK")
});