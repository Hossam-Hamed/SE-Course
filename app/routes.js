module.exports = function(app) {

  var jwt = require('jsonwebtoken');
  var seats;
  var mongo = require('./db.js'); 
  var moment = require('moment');
  var fs = require('fs');
  var client = require('mongodb').MongoClient;

  // app.use(function(req, res, next) {
  //   // check header or url parameters or post parameters for token
  //   var token = req.body.wt || req.query.wt || req.headers['x-access-token'];   
  //   console.log("{{{{ TOKEN }}}} => ", token);
  //   var jwtSecret = process.env.JWTSECRET;
  //   // Get JWT contents:
  //   try 
  //   {
  //     var origin = jwt.verify(token, origin);
  //     var destination = jwt.verify(token,destination);
  //     var departingDate = jwt.verify(token,departingDate);
  //     var returningDate = jwt.veriy(token,returningDate);
  //     var Class = jwt.verify(token,class);
  //     req.origin = origin;
  //     req.destination = destination;
  //     req.departingDate = departingDate;
  //     req.returningDate = returningDate;
  //     req.class = Class;
  //     next();
  //   } 
  //   catch (err) 
  //   {
  //     console.error('[ERROR]: JWT Error reason:', err);
  //     //res.status(403).sendFile(path.join(__dirname, '../public', '403.html'));
  //   }
  // });

  app.get('/', function(req, res) {
        res.sendFile('index.html');
  });

  app.get('/db/seed',function(req, res) {
    mongo.db().collection('Flights').count(function(err, count) {
      if (count == 0) {
        var routes = JSON.parse(fs.readFileSync('flights.json', 'utf8'));
        // insert returning flights
        for (var i = 0; i < routes.length; i++) {
            var route = routes[i];
            seedFlights(route,route.origin, route.destination);
        }
        function seedFlights(flight, _origin, _destination) {
          doc = {
              "flightNumber": flight.flightNumber,
              "aircraft": flight.aircraft,
              "capacity": flight.capacity,
              "date": moment().add(i, 'days').calendar(),
              //"date"          : new Date(),
              "duration": flight.duration,
              "origin": _origin,
              "destination": _destination,
              "seatmap": []
          };
          mongo.db().collection('Flights').insert(doc, function(err, data) {
              if (err) console.log('error');
              else console.log('insert successful');
          });
        }
      } else {
        console.log("# of Flights was: " + count);
      }
    });
    var airports = JSON.parse(fs.readFileSync('airports.json', 'utf8'));
    mongo.db().collection('Airports').count(function(err, count) {
      // assert.equal(err, null);
      if (count == 0) {
        mongo.db().collection('Airports').insert(airports, function(err2, result) {
          //assert.equal(null, err2);
          // cb(err2, true);
        });
      } else {
        // cb(err, false);
        console.log("# of Airports was: " + count);
      }
    });
    res.send("BalaBeezo");
  });

    
  app.get('/db/delete',function(req,res){
    mongo.db().collection('Flights').deleteMany(function(err,data){
      if (err) {
        res.send("Couldn't delete");
        throw error('flights delete faild');
      }
      else {
        res.send("Deletion succesful");
        console.log("flights delete many succesful");
      }
    });
    mongo.db().collection('Airports').deleteMany(function(err,data){
      if (err) {
        //  res.send("Couldn't delete");
        throw error('airports delete faild');
      }
      else {
        //  res.send("airports deleted");
        console.log("airports delete many succesful");
      }
    });
  });

  app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-Requested-with');
    next();
  });

  app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class',function(req,res){
   mongo.db().collection('Flights').find({'origin':req.origin ,'destination': req.destination,'departingDate' : req.departingDate,'returningDate' : req.returningDate, 'cabin': req.cabin}).toArray().then(function (flights) {
    console.log("heloo");
    res.send(flights);
    });
  });

  app.get('/api/flights/search/:origin/:destination/:departingDate/:class', function(req,res){
    mongo.db.collection('Flights').find({'origin' :  req.origin,'destination' :req.destination, 'departingDate' : req.departingDate,'cabin' : req.cabin}).toArray().then(function (flights){
      console.log("heloo");
      res.send(flights);
    });
  });

  app.get('/api/flights/search',function(req,res){
    req = require ('infoflight.json');
    res.send(req);
  });

  app.get('/api/baalabezoo/:from/:to/:flightDate/:cabin', function(req, res) {
    seats = mongo.db().collection('balbezoo').find().toArray(function(err, docs) {
      cb(err, docs);
    });
  });

  app.get('/api/baalabezoo/:bookingRefNumber', function(req, res) {
    mongo.getBookingFromDb(function(err, data) {
      res.send(data); //one random quote
    });
  });

  exports.seats;

};