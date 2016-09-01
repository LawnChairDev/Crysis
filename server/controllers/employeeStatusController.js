var mongoose = require('mongoose');
var apple = require('../helpers/applepushHelper.js');
var Employee = require('../db/schema.js')['Employee'];


module.exports = {
  "GET": function(req, res){
    console.log(req.user);
    Employee.find({ orgName: req.user.orgName, wardenName: req.user.wardenName}, ' name status wardenName')
      .then(function(result){
        res.status(200).send(result);
      })
      .catch(function(err){
        console.log('error in employeeStatus get', err);
        res.status(500).send(err);
      })
  },
  "PUT": function(req, res){
    Employee.update({ userName: req.user.userName}, { status: req.body.status})
      .then(function(){
        return Employee.find({ orgName: req.user.orgName, wardenName: req.user.wardenName}, '-_id deviceToken');
      })
      .then(function(data){
        console.log(data);
        var justDeviceTokenArr = data.filter(function(element){
          return element['deviceToken'] !== "";
        }).map(function(entry){
          return apple.createDevice(entry['deviceToken']);
        })
        var note = apple.createNote();
        note.expiry = Math.floor(Date.now() / 1000) + 3600;
        note.payload = { "userStatus": req.body.status, "userStatusUpdate": true, "silent": true};
        note['content-available'] = 1;
        apple.connection.pushNotification(note, justDeviceTokenArr);
        res.status(200).send('push notifications sent successfully');
      })
      .catch(function(err){
        console.log('error in employeeStatus put', err);
        res.status(500).send(err);
      })
  }
}
