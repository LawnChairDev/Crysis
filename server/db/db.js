var mongodb = require('mongodb');
var mongoose = require('mongoose');
var mLab = require('./mLab-url.js');

mongoose.Promise = global.Promise;
mongoose.connect(mLab);

mongoose.connection.on('connected', function(){
  console.log("Mongoose connection open")
})

mongoose.connection.on('error', function(err){
  console.log("Mongoose connection error: ", err);
})

mongoose.connection.on('disconnected', function(){
  console.log("Mongoose disconnected");
})

process.on('SIGINT', function(){
  mongoose.connection.close(function(){
    process.exit(0);
  })
})
