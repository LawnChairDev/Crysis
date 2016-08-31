var emergencyStatus = require('./emergencyStatusController.js');
var login = require('./loginController.js');
var employeeStatus = require('./employeeStatusController.js');

module.exports = {
  emergencyStatus: emergencyStatus,
  login: login,
  employeeStatus: employeeStatus
}
