var mongodb = require('mongodb');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var mLab = require('./mLab-url.js');
var schema = require('./schema.js');
var Employee = schema.Employee;
var Org = schema.Organization;

mongoose.Promise = global.Promise;
mongoose.connect(mLab);

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
    console.log('dummy data organizations created');
  })

console.log(bcrypt.hashSync('superawesome', 10));

Employee.create(
  {
    _id: 1,
    userName: "SuperBob",
    userPassword: bcrypt.hashSync('a', 10),
    name: {
      first: "Bob",
      last: "Hoskins"
    },
    email: "Bob@me.com",
    isWarden: true,
    isAdmin: false,
    wardenName: "Bob Hoskins",
    status: "pending",
    orgName: "SideCar",
    deviceToken: "",
    warden: null,
    orgId: "57c5f3c062bf5c8e81bf7c04"
  },
  {
    _id: 2,
    userName: "MaryM",
    userPassword: bcrypt.hashSync('a', 10),
    name: {
      first: "Mary",
      last: "Marlene"
    },
    email: "Mary@me.com",
    isWarden: false,
    isAdmin: false,
    wardenName: "Bob Hoskins",
    status: "pending",
    orgName: "SideCar",
    deviceToken: "",
    warden: null,
    orgId: "57c5f3c062bf5c8e81bf7c04"
  },
  {
    _id: 3,
    userName: "Dooder",
    userPassword: bcrypt.hashSync('a', 10),
    name: {
      first: "Dude",
      last: "McDuderton"
    },
    email: "theDude@me.com",
    isWarden: true,
    isAdmin: false,
    wardenName: "Bob Hoskins",
    status: "pending",
    orgName: "SideCar",
    deviceToken: "",
    warden: null,
    orgId: "57c5f3c062bf5c8e81bf7c04"
  },
  {
    _id: 4,
    userName: "MerikW",
    userPassword: bcrypt.hashSync('a', 10),
    name: {
      first: "Merik",
      last: "Woodmansee"
    },
    email: "merik@me.com",
    isWarden: true,
    isAdmin: true,
    wardenName: "Merik Woodmansee",
    status: "pending",
    orgName: "MKS41",
    deviceToken: "",
    warden: null,
    orgId: "57c5f3c062bf5c8e81bf7c03"
  },
  {
    _id: 5,
    userName: "JunggueY",
    userPassword: bcrypt.hashSync('a', 10),
    name: {
      first: "Junggue",
      last: "Yang"
    },
    email: "junggue@me.com",
    isWarden: false,
    isAdmin: false,
    wardenName: "Merik Woodmansee",
    status: "pending",
    orgName: "MKS41",
    deviceToken: "",
    warden: null,
    orgId: "57c5f3c062bf5c8e81bf7c03"
  },
  {
    _id: 6,
    userName: "MattyIce",
    userPassword: bcrypt.hashSync('a', 10),
    name: {
      first: "Matt",
      last: "Terranova"
    },
    email: "Matt@me.com",
    isWarden: false,
    isAdmin: false,
    wardenName: "Merik Woodmansee",
    status: "pending",
    orgName: "MKS41",
    deviceToken: "",
    warden: null,
    orgId: "57c5f3c062bf5c8e81bf7c03"
  },
  function(err, response){
    console.log('err', err);
    console.log('response', response);
    console.log("dummy data employees created");
  }
)
