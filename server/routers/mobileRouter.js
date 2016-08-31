var express = require('express');
var router = express.Router();
var noRoute = require('./404Router');
var controller = require('../controllers/--index--Controller.js');

router.put('/emergencyStatus', controller.emergencyStatus.PUT);
router.get('/emergencyStatus', controller.emergencyStatus.GET);

router.put('/employeeStatus', controller.employeeStatus.PUT);
router.get('/employeeStatus', controller.employeeStatus.GET);

router.post('/login', controller.login.POST);

router.put('/deviceToken', function(){
  console.log('get in mobile for deviceToken')
})


router.use(noRoute);

module.exports = router;
