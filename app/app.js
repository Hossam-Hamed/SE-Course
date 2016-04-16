var express       = require('express');
var app           = express();
var bodyParser    = require('body-parser');
var mongo 	= require('./db');

// Export environment vars first thing
// require('dotenv').load();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));
// require('./routes')(app);

// app.get('/', function(req, res) {
// 	res.sendFile('index.html');
// });
require('./routes')(app);

app.listen(3000, function () {
	console.log('up');
	mongo.init('mongodb://localhost:27017/flights_db');

});
module.exports = app;