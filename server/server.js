var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db/db.js');
var indexRouter = require('./routers/--index--Router.js');
var noRoute = require('./routers/404Router.js');
var expressJWT = require('express-jwt');

app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

var envPort = app.get('port');

app.get('/', express.static('./server'));

app.use(expressJWT({
  secret: 'fullbuzzle',
  getToken: function fromHeaderOrQueryString(req){
    return req.headers['x-access-token'];
  }
}).unless({ path: ['/api/mobile/login', '/api/web/login']}));

app.use(function(err, req, res, next){
  if (err.name === 'UnauthorizedError'){
    res.status(401).send('invalid authorization token');
  }
})

app.use('/api', indexRouter);

app.use(noRoute);

app.listen(envPort, function(){
  console.log("listening on port " + envPort);
})
