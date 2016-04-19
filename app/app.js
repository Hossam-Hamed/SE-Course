
var express       = require('express');
var app           = express();
var bodyparse = require('body-parser');
var db = require('./db.js');

app.use(express.static('public'));
//require('dotenv').load();
require('./routes')(app);



db.init("mongodb://localhost:27017/balabezoo", function(err, db) {
    console.log('connected to db');
});

app.get('/', function(req, res) {
	res.sendFile('index.html');
});


module.exports = app;