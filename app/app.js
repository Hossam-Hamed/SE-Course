var express       = require('express');
var app           = express();
var bodyparse = require('body-parser');
var db = require('./db.js');

app.use(express.static('public'));

app.use(require('cors')());

require('dotenv').load();
require('./routes')(app);



db.init("mongodb://localhost:27017/balabezoo", function(err, db) {
    console.log('connected to db');
});

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-Requested-with');
  next();
})



module.exports = app;