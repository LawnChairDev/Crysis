var mongodb = require('mongodb');
var mongoose = require('mongoose');
var schema = require('./schema.js');
var Employee = schema.Employee;
var Org = schema.Organization;

Org.create(
  {
    orgName: "MKS41",
    orgPassword: "a",
    inEmergency: false
  },
  {
    orgName: "SideCar",
    orgPassword: "a",
    inEmergency: false
  },
  {
    orgName: "SpinFish",
    orgPassword: "a",
    inEmergency: false
  }, function(){
    console.log('this function ran');
  })

// Employee.create(
//   {
//   userName: { type: String, unique: true},
//   firstName: String,
//   lastName: String,
//   email: String,
//   isWarden: Boolean,
//   isAdmin: Boolean,
//   wardenName: String,
//   wardenId: { type: Schema.Types.ObjectId, ref: 'Employee'}
//   status: String,
//   orgId: { type: Schema.Types.ObjectId, ref: 'Organization'},
//   orgName: String,
//   deviceToken: String
// },
// {
// userName: { type: String, unique: true},
// firstName: String,
// lastName: String,
// email: String,
// isWarden: Boolean,
// isAdmin: Boolean,
// wardenName: String,
// wardenId: { type: Schema.Types.ObjectId, ref: 'Employee'}
// status: String,
// orgId: { type: Schema.Types.ObjectId, ref: 'Organization'},
// orgName: String,
// deviceToken: String
// },
// {
// userName: { type: String, unique: true},
// firstName: String,
// lastName: String,
// email: String,
// isWarden: Boolean,
// isAdmin: Boolean,
// wardenName: String,
// wardenId: { type: Schema.Types.ObjectId, ref: 'Employee'}
// status: String,
// orgId: { type: Schema.Types.ObjectId, ref: 'Organization'},
// orgName: String,
// deviceToken: String
// },
// {
// userName: { type: String, unique: true},
// firstName: String,
// lastName: String,
// email: String,
// isWarden: Boolean,
// isAdmin: Boolean,
// wardenName: String,
// wardenId: { type: Schema.Types.ObjectId, ref: 'Employee'}
// status: String,
// orgId: { type: Schema.Types.ObjectId, ref: 'Organization'},
// orgName: String,
// deviceToken: String
// },
// {
// userName: { type: String, unique: true},
// firstName: String,
// lastName: String,
// email: String,
// isWarden: Boolean,
// isAdmin: Boolean,
// wardenName: String,
// wardenId: { type: Schema.Types.ObjectId, ref: 'Employee'}
// status: String,
// orgId: { type: Schema.Types.ObjectId, ref: 'Organization'},
// orgName: String,
// deviceToken: String
// },
// {
// userName: { type: String, unique: true},
// firstName: String,
// lastName: String,
// email: String,
// isWarden: Boolean,
// isAdmin: Boolean,
// wardenName: String,
// wardenId: { type: Schema.Types.ObjectId, ref: 'Employee'}
// status: String,
// orgId: { type: Schema.Types.ObjectId, ref: 'Organization'},
// orgName: String,
// deviceToken: String
// },
// {
// userName: { type: String, unique: true},
// firstName: String,
// lastName: String,
// email: String,
// isWarden: Boolean,
// isAdmin: Boolean,
// wardenName: String,
// wardenId: { type: Schema.Types.ObjectId, ref: 'Employee'}
// status: String,
// orgId: { type: Schema.Types.ObjectId, ref: 'Organization'},
// orgName: String,
// deviceToken: String
// },
// )
