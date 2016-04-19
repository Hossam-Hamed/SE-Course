
module.exports = function(app) {
var jwt     = require('jsonwebtoken');
    var mongo   = require('./db.js');
    var moment  = require('moment');
    var seats;
    app.get('/', function(req, res) {
        res.sendFile('index.html');
    });
//this is middleware i think
app.use(function(req, res, next) {

      // check header or url parameters or post parameters for token  
      var token = req.headers['x-access-token'];   

      console.log("{{{{ TOKEN }}}} => ", token);

      var jwtSecret = process.env.JWTSECRET;

      // Get JWT contents:
      try 
      {
        var payload = jwt.verify(token, jwtSecret);
        req.payload = payload;
        next();
      } 
      catch (err) 
      {
        console.error('[ERROR]: JWT Error reason:', err);
        res.send("balabezoo");
      //  res.status(403).sendFile(path.join(__dirname, '../public', '403.html'));
      }

    })
app.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-Requested-with');
  next();
})
app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class' 
  ,function(req,res){
   mongo.db().collection('Flights').find({'origin':req.origin ,'destination': req.destination})
   .toArray().then(function (flights) {
   console.log("heloo");
   res.send(flights);
 });
})


app.get('/api/flights/search/:origin/:destination/:departingDate/:class'
  ,function(req,res){
  mongo.db.collection('Flights').find({'origin' :  req.origin,'destination' :req.destination})
   .toArray().then(function (flights){
  console.log("heloo");
   res.send(flights);
 });
})

app.get('/api/flights/search',function(req,res){
req = require ('infoflight.json');
res.send(req);
})

app.get('/api/baalabezoo/:from/:to/:flightDate/:cabin', function(req, res) {
 seats = mongo.db().collection('balbezoo').find().toArray(function(err, docs) {
    cb(err, docs);
  })
  });

    app.get('/api/baalabezoo/:bookingRefNumber', function(req, res) {
        mongo.getBookingFromDb(function(err, data) {
        res.send(data); //one random quote

    });
    });
    exports.seats;

}
