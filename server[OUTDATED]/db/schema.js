var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = Schema({
  userName: { type: String, unique: true},
  firstName: String,
  lastName: String,
  email: String,
  isWarden: Boolean,
  isAdmin: Boolean,
  wardenName: String,
  wardenId: { type: Schema.Types.ObjectId, ref: 'Employee'},
  status: String,
  orgId: { type: Schema.Types.ObjectId, ref: 'Organization'},
  orgName: String,
  deviceToken: String
})

var orgSchema = Schema({
  orgName: { type: String, unique: true},
  orgPassword: String,
  inEmergency: Boolean,
})

var Employee = mongoose.model('Employee', employeeSchema);
var Organization = mongoose.model('Organization', orgSchema);

module.exports = {
  Employee: Employee,
  Organization: Organization
}
