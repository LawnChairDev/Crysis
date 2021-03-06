var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
var config = require('../env/config.js')['postgres'];

var sequelize = new Sequelize(
    config.databaseName,
    config.userName,
    config.password, {
      host: config.host,
      port: config.port,
      dialect: config.dialect
    }
);

// sequelize
//   .authenticate()
//   .then(function (err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

var Employee = sequelize.define('Employee', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  name: Sequelize.STRING,
  isWarden: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  wardenName: Sequelize.STRING,
  status: {
    type: Sequelize.STRING,
    defaultValue: 'pending'
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  salt: Sequelize.STRING,
  hash: Sequelize.STRING,
  //authentication goes here
  password: {
    type: Sequelize.VIRTUAL,
    allowNull: false,
    validate: {
      len: [10, 100]
    },
    set: function(value) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(value, salt);
      this.setDataValue('salt', salt);
      this.setDataValue('hash', hash);
      this.setDataValue('password', value);
    }
  },
  deviceToken: Sequelize.STRING
},
{
  tableName: 'Employee',
  timestamps: false,
});

var Organization = sequelize.define('Organization', {
  orgName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  safezone: Sequelize.STRING,
  emergencyStatus: Sequelize.BOOLEAN,
  orgSalt: Sequelize.STRING,
  orgHash: Sequelize.STRING,
  //Auth for organization
  orgPassword: {
    type: Sequelize.VIRTUAL,
    allowNull: false,
    validate: {
      len: [10, 100]
    },
    set: function(value) {
      var orgSalt = bcrypt.genSaltSync(10);
      var orgHash = bcrypt.hashSync(value, orgSalt);
      this.setDataValue('orgSalt', orgSalt);
      this.setDataValue('orgHash', orgHash);
      this.setDataValue('orgPassword', value);
    }
  }
},
{
  tableName: 'Organization',
  timestamps: false
});

var Emergency = sequelize.define('Emergency', {
  instructions: Sequelize.TEXT,
  emergencyType: Sequelize.STRING,
  //map and uploaded files go here
},
{
  tableName: 'Emergency',
  timestamps: false
});

Organization.hasMany(Employee, {foreignKey: 'organizationId'});
Emergency.hasMany(Organization, {foreignKey: 'emergencyId'});

Employee.belongsTo(Organization, {foreignKey: 'organizationId'})
Organization.belongsTo(Emergency, {foreignKey: 'emergencyId'})

sequelize.sync().then(function() {
  console.log('Tables created');
})

exports.Employee = Employee;
exports.Organization = Organization;
exports.Emergency = Emergency;
