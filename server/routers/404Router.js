var express = require('express');
var router = express.Router();

module.exports = function(req, res){
  res.status(404).send('404, Request not found');
}
