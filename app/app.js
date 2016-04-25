var express       = require('express');
var app           = express();

app.use(express.static('public'));
 require('./routes')(app);


app.listen(3000, function () {
	console.log('up');
});
// module.exports = app;