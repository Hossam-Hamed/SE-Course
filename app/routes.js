 module.exports = function(app) {

var seats;



app.get('/', function(req, res) {
res.sendFile('index.html');
});


app.get('/api/baalabezoo/:from/:to/:flightDate/:cabin', function(req, res) {
 seats = mongo.db().collection('balbezoo').find().toArray(function(err, docs) {
		cb(err, docs);
	})
  });

exports.seats;

};

