var express       = require('express');
var app           = express();
var db = require('./db.js');

app.use(express.static('public'));
// require('./routes')(app);

db.init("mongodb://localhost:27017/balabezoo", function(err, db) {
    console.log('connected to db');
});

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(3000, function () {
	console.log('up');
});
// module.exports = app;

/* SEED DB */
app.get('/db/seed', function(req, res) {
	db.seed();
	res.send("seeded");
}); 