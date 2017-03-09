'use strict';


var express = require('express'),
    app = express(),
    router = express.Router(),
    db = require('../models'),
    multer = require('multer');

var path = require('path'),
    uploadPath = path.join(__dirname + '/../../uploads');

var fileParser = require('../lib/fileParser');
var parser = new fileParser();

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadPath)
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({
    storage: storage
});

module.exports = function(app) {
    app.use('/', router);
};

router.get('/', function(req, res, next) {
    res.sendStatus(200);
});

router.post('/form', function(req, res, next) {
    var answers = req.body.form_response.answers;
    // console.log('body=>', req.body);
    answers.forEach(function(answer){
        console.log("answer", answer);
    })
   


    res.status(200).json(req.body);
});

router.get('/test', function(req, res, next) {
    res.sendStatus(200);
});



router.post('/ingest', upload.single('file'), function(req, res) {
    var filePath = req.file.path;
    var items = parser.readFile(filePath);
    console.log('file', filePath);
    console.log('models', models);
    models.Survey.bulkCreate(items);
    models.Answer.bulkCreate(items);
    res.status(200).json({ 'file': items });

});


var answerScore = [];
var scores = {};
var tabAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
//for (var i = 0; i < tabAlphabet.length; i++) {

router.get('/getScore/:idSurvey/:indStart/:indEnd', function(req, res, next) {
    //router.get('/getScore/:indStart/:indEnd', function(req, res, next) {
    let indStart = parseInt(req.params.indStart);
    let indEnd = parseInt(req.params.indEnd);

    var survey = req.params.idSurvey;

    answerScore = [];
    scores.scoreA = 0;
    scores.scoreB = 0;
    scores.scoreC = 0;
    scores.scoreD = 0;
    scores.scoreE = 0;
    scores.scoreF = 0;
    scores.scoreG = 0;
    scores.scoreH = 0;
    scores.scoreI = 0;
    scores.scoreJ = 0;
    scores.scoreK = 0;
    scores.scoreL = 0;


    models.Answer.findAll({
        where: {
            'FK_question': { $gt: indStart - 1, $lt: indEnd + 1 },
            'idSurvey': idSurvey
                //25

        }
    }).then(function(answers) {
        for (var index = 0; index < answers.length; index++) {
            answerScore[answerScore.length] = answers[index].dataValues.value
        }
        return answerScore;
    }).then(function(answerScore) {
        console.log("answerScore", answerScore);
        answerScore.forEach(function(score) {
            if (!isNaN(score)) {
                switch (indStart) {
                    case 1:
                        scores.scoreA = scores.scoreA + parseInt(score);
                        break;
                    case 4:
                        scores.scoreB = scores.scoreB + parseInt(score);
                        break;
                    case 7:
                        scores.scoreC = scores.scoreC + parseInt(score);
                        break;
                    case 10:
                        scores.scoreD = scores.scoreD + parseInt(score);
                        break;
                    case 13:
                        scores.scoreE = scores.scoreE + parseInt(score);
                        break;
                    case 16:
                        scores.scoreF = scores.scoreF + parseInt(score);
                        break;
                    case 19:
                        scores.scoreG = scores.scoreG + parseInt(score);
                        break;
                    case 21:
                        scores.scoreH = scores.scoreH + parseInt(score);
                        break;
                    case 24:
                        scores.scoreI = scores.scoreI + parseInt(score);
                        break;
                    case 27:
                        scores.scoreJ = scores.scoreJ + parseInt(score);
                        break;
                    case 30:
                        scores.scoreK = scores.scoreK + parseInt(score);
                        break;
                    case 33:
                        scores.scoreL = scores.scoreL + parseInt(score);
                        break;
                    default:
                        "Il ya eu une erreur dans l'encodage"
                }

            };
            return scores;
        })

    }).then(function(scores) {}).then(function() {
        res.status(200).json({ 'scores.scoreA': scores.scoreA });
    }).catch(function(error) {
        console.log(error);
    })
});
