var mongoose = require('mongoose');
var Organization = require('../db/schema.js')['Organization'];
var Employee = require('../db/schema.js')['Employee'];
var apple = require('../helpers/applepushHelper.js');

module.exports = {
  "PUT": function(req, res){
    console.log(req.user);
    Organization.update({ orgName: req.user.orgName}, { inEmergency: true})
    .then(function(){
      return Employee.find({orgName: req.user.orgName}, '-_id deviceToken')
    })
    .then(function(data){
      console.log("employeeArray", data);
      var justDeviceTokenArr = data.filter(function(element){
        console.log(element['deviceToken'] === "");
        return element['deviceToken'] !== "";
      }).map(function(entry){
        return apple.createDevice(entry['deviceToken']);
      })
      console.log(justDeviceTokenArr, "just token array")
      console.log("about to send to apple for push");

      var note = apple.createNote();
      note.expiry = Math.floor(Date.now() / 1000) + 3600;
      note.badge = 1;
      note.sound = "ping.aiff";
      note.alert = "EMERGENCY ALERT";
      note.payload = { "EMERGENCY": "There is a fire in the building please evacuate immediately"};
      apple.connection.pushNotification(note, justDeviceTokenArr);

      res.status(200).send("Organization Emergency Status updated");
    })
    .catch(function(err){
      console.log("error updating emergencyStatus", err)
      res.status(500).send(err);
    })
  },
  "GET": function(req, res){
    Organization.findOne({orgName: req.user.orgName}, '-_id inEmergency')
    .then(function(result){
      console.log('promise result', result);
      res.status(200).send(result);
    })
    .catch(function(err){
      console.log("error getting emergencyStatus", err);
      res.status(500).send(err);
    })
  }
}
