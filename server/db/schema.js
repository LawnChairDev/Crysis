var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = Schema({
  _id: { type: Number, required: true},
  userName: { type: String, unique: true},
  userPassword: String,
  name: {
    first: String,
    last: String
  },
  email: String,
  isWarden: Boolean,
  isAdmin: Boolean,
  wardenName: String,
  status: String,
  orgName: String,
  deviceToken: String,
  warden: { type: Schema.Types.ObjectId, ref: 'Employee'},
  orgId: { type: Schema.Types.ObjectId, ref: 'Organization'}
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
