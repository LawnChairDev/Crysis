var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');
var fnHelper = require('../utils/fnHelper.js');
var jwt = require('jsonwebtoken');
var secret = require('../env/config.js')['key'];

module.exports = {
  'adminLogin': {
    get: function(req, res) {
      res.end('Received GET adminLogin');
    },
    post: function(req, res) {
      var org = {
        orgName: req.body.orgName,
        orgPassword: req.body.orgPassword
      }
      var admin = {
        username: req.body.username,
        password: req.body.password
      };
      dbHelper.getRecord(db.Organization, 'orgName', req.body.orgName)
        .then(function(org) {
          if(org) {
            console.log('inside org exists check');
            fnHelper.verifyPassword(org.orgHash, req.body.orgPassword)
              .then(function(match) {
                if(match) {
                  console.log('inside org password match');
                  dbHelper.getRecord(db.Employee, 'username', req.body.username)
                    .then(function(admin) {
                      if(admin) {
                        console.log('inside admin exists check');
                        fnHelper.verifyPassword(admin.hash, req.body.password)
                        .then(function(match) {
                          if(match) {
                            console.log('inside admin password login match');
                            dbHelper.getRecord(db.Employee, 'isAdmin', admin.isAdmin)
                            .then(function(isAdmin) {
                              if(isAdmin) {
                                console.log('inside admin status check');
                                var token = jwt.sign({
                                  organizationId: org.id,
                                  orgName: org.orgName
                                }, secret.SECRET);
                                res.send({
                                  token: token,
                                  success: true,
                                  message: 'Passwords match',
                                  org: org,
                                  organizationId: org.id
                                });
                              } else {
                                res.status(403).json({
                                  success: false,
                                  message: 'Employee is not authorized'
                                });
                              }
                            });
                          } else {
                            res.status(401).json({
                              success: false,
                              message: 'Invalid administrator login info'
                            });
                          }
                        });
                      } else {
                        res.status(403).json({
                          success: false,
                          message: 'Administrator does not exist'
                        });
                      }
                    });
                  } else {
                    res.status(401).json({
                      success: false,
                      message: 'Invalid organization login info'
                    });
                  }
                });
          } else {
            res.status(403).json({
              success: false,
              message: 'Organization does not exist'
            });
          }
        });
    },
    put: function(req, res) {
      res.end('Received PUT adminLogin');
    },
    delete: function(req, res) {
      res.end('Received DELETE adminLogin');
    }
  }
}
