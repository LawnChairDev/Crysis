var mongoose = require('mongoose');
var Organization = require('../db/schema.js')['Organization'];

module.exports = {
  "PUT": function(req, res){
    console.log(req.user);
    Organization.update({ orgName: req.user.orgName}, { inEmergency: true})
    .then(function(result){
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
