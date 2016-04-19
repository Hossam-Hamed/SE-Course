var express       = require('express');
var app           = express();
var bodyparse = require('body-parser');
require('dotenv').load();
var db = require('./db.js');
app.use(express.static('public'));

db.init("mongodb://localhost:27017/balabezoo", function(err, db) {
    console.log('connected to db');
});
app.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-Requested-with');
  next();
})

 require('./routes')(app);


// module.exports = app;

/* SEED DB */
app.get('/db/seed', function(req, res) {
	db.seed();
	res.send("seeded");
}); 
app.listen(3000, function () {
	console.log('up');
	// mongo.init('mongodb://localhost:27017/flights_db');

});
