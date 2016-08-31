var mongoose = require('mongoose');
var Employee = require('../db/schema.js')['Employee'];

module.exports = {
  "GET": function(req, res){
    console.log(req.user);
    Employee.find({ orgName: req.user.orgName}, '-_id name status wardenName')
      .then(function(result){
        console.log('result in get of employeeStatus', result);
        res.status(200).send(result);
      })
      .catch(function(err){
        console.log('error in employeeStatus get', err);
        res.status(500).send(err);
      })
  },
  "PUT": function(req, res){
    Employee.update({ userName: req.user.userName}, { status: "inDanger"})
      .then(function(){
        console.log('employeeStatus updated successfully');
        res.status(200).send('employeeStatus updated successfully');
      })
      .catch(function(err){
        console.log('error in employeeStatus put', err);
        res.status(500).send(err);
      })
  }
}
