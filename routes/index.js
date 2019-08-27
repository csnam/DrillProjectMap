var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/Map', function(req, res, next) {
  res.render('Map');
});


router.get('/Map2', function(req, res, next) {
  res.render('Map2');
});

router.get('/Map3', function(req, res, next) {
  res.render('Map3');
});

router.get('/Map4', function(req, res, next) {
  res.render('Map4');
});

router.get('/Map5', function(req, res, next) {
  res.render('Map5');
});
module.exports = router;
