var express = require('express');
var router = express.Router();
var noRoute = require('./404Router.js');

router.get('/', function(req, res){
  console.log('get in web');
  res.status(200).send('A OK');
})

router.post('/', function(req, res){
  console.log('post in web');
  res.status(200).send('A OK');
})

router.use(noRoute);

module.exports = router;
