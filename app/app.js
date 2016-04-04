var express       = require('express');
var app           = express();

app.use(express.static('public'));
// require('./routes')(app);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(80, function () {
	console.log('up');
});
// module.exports = app;
