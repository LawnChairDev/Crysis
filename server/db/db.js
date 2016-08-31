var mongodb = require('mongodb');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://M0ssMan:gravytrain@ds013014.mlab.com:13014/supersand');

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
