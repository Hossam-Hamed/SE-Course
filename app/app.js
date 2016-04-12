var express       = require('express');
var app           = express();

app.use(express.static('public'));
// require('./routes')(app);

app.get('/', function(req, res) {
// <<<<<<< HEAD
	res.sendFile(__dirname + '/public/index.html');
// });

// app.listen(3000, function () {
// 	console.log('up');
// });
// module.exports = app;
// // =======
// 	res.sendFile('index.html');
});

app.listen(3000, function () {
	console.log('up');
});
// module.exports = app;
// >>>>>>> ccbf03d8fb5e839272630b5e6895d5800085e713
