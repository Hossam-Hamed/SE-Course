var express       = require('express');
var app           = express();
require('dotenv').load();
app.use(express.static('public'));
 require('./routes')(app);

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(3000, function () {
	console.log('up');
});
// module.exports = app;