var express = require('express');
var router = express.Router();
var mobileRouter = require('./mobileRouter.js');
var webRouter = require('./webRouter.js');
var noRoute = require('./404Router.js');

router.use('/mobile', mobileRouter);
router.use('/web', webRouter);
router.use(noRoute);

module.exports = router;
