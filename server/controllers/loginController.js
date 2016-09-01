var mongoose = require('mongoose');
var Employee = require('../db/schema.js')['Employee'];
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = {
  "POST": function(req, res){
    var userName = req.body.userName;
    var userPass = req.body.userPassword;
    var employeeInfo;
    Employee.findOne({ userName: userName})
      .then(function(result){
        employeeInfo = result;
        var hashedPass = employeeInfo.userPassword;
        return new Promise(function(pass, fail){
          bcrypt.compare(userPass, hashedPass, function(err, result){
            console.log(err, "err right after pass compare");
            console.log(result, "result right after pass compare");
            if(err){
              fail(err);
            } else {
              pass(result);
            }
          })
        })
      })
      .catch(function(err){
        console.log("error in post for login", err);
        res.status(500).send(err);
      })
      .then(function(match){
        console.log(match);
        if(match){
          Employee.update({ userName: userName}, { deviceToken: req.body.deviceToken})
          .then(function(){
            var token = jwt.sign({
              userName: employeeInfo.userName,
              name: employeeInfo.name,
              orgName: employeeInfo.orgName,
              wardenName: employeeInfo.wardenName
            }, "fullbuzzle");
            res.status(200).send({
              token: token,
              message: 'login successful'
            });
          })
          .catch(function(err){
            console.log('error updating database for device token', err);
            res.status(500).send('database error');
          })
        } else {
          throw Error('incorrect credentials');
        }
      })
      .catch(function(){
        res.status(401).send('incorrect credentials');
      })
  }
}
