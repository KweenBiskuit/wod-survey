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
  destination: function (req, file, cb) {
    cb(null, uploadPath)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname))
  }
});

var upload = multer({
  storage: storage
});

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.sendStatus(200);
});

router.post('/form', function (req, res, next) {
  console.log('body=>', req)
  res.status(200).json(req.body);
});

router.get('/test', function (req, res, next) {
  res.sendStatus(200);
});

router.post('/ingest', upload.single('file'), function (req, res) {
  var filePath = req.file.path;
  var items = parser.readFile(filePath);

  console.log('file ingest =>', uploadPath);
  res.status(200).json({
    'file': items
  });

});
