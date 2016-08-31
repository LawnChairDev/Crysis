var mongodb = require('mongodb');
var mongoose = require('mongoose');
// var uniqValidate = require('mongoose-unique-validator');
var theSchema = require('./schema.js');
var Employee = theSchema.Employee;
var Organization = theSchema.Organization;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://M0ssMan:gravytrain@ds013014.mlab.com:13014/supersand');

var employeeEntry = new Employee({
  userName: 'Maddox',
  firstName: "Max",
  lastName: "Ein",
  isWarden: true,
  isAdmin: false,
  wardenName: "Max",
  status: "pending",
  orgId: null,
  orgName: "Cool Stuff",
  deviceToken: ""
})

// employeeEntry.save(function(err, result){
//   if(err) console.log(err);
//   console.log("entry saved", result);
// })

// var kittySchema = mongoose.Schema({
//   name: { type: String, unique: true }
// });
//
// var catSchema = mongoose.Schema({
//   name: String,
//   brother: { type: mongoose.Schema.Types.ObjectId, ref: 'Kitten'}
// })
//
// var Kitten = mongoose.model('Kitten', kittySchema);
//
// var Cat = mongoose.model('Cat', catSchema);
//
// var myCat = new Cat({ name: 'bubba', brother: '57c5b447428da7cc73b3da37'});
//
// myCat.save(function(err, result){
//   if(err) console.log('error in cat save', err);
//   console.log('saved big cat');
// })

// var silence = new Kitten({ name: 'Silence' });

// silence.save(function(err, result){
//   if(err){
//     console.log('error in save', err);
//   }
//   console.log(result);
// });

// Kitten.findOne({ name: 'Silence'}, '_id', function(err, person){
//   if(err) console.log(err);
//   console.log('found it', person);
// })


// Kitten.create({ name: 'pooper'}, { name: 'shitter'}, function(err){
//   if(err){
//     console.log('error in bulk create', err);
//   }
//   console.log('bulCreate worked');
// })

// Cat
//   .findOne({name: 'bubba'})
//   .populate('brother', '-_id name')
//   .exec(function(err, cat){
//     if(err) console.log(err);
//     console.log('here is the info', cat);
//   })
