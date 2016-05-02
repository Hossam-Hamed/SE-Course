module.exports = function(app) {

  var jwt = require('jsonwebtoken');
  var seats;
  var mongo = require('./db.js'); 
  var moment = require('moment');
  var fs = require('fs');
  var client = require('mongodb').MongoClient;
  var bodyParser = require('body-parser');
  var stripe = require('stripe')('sk_test_CVbmlsXC7jPeJGxTMqIPvtyC');
  //console.log(stripe);
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
          for (var i = 1; i <= 46; i++) {
            doc = {
              "flightNumber": flight.flightNumber,
              "aircraft": flight.aircraft,
              "capacity": flight.capacity,
              "date": moment().add(i, 'days').calendar(),
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

  // app.all('*',function(req,res,next){
  //   res.header('Access-Control-Allow-Origin','*');
  //   res.header('Access-Control-Allow-Headers','X-Requested-with');
  //   next();
  // });

   //middlewear
   
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  /*app.use(function(req, res, next) {

       var token = req.body.wt || req.query.wt || req.headers['x-access-token'];   

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

    })*/

   app.get('/api/flights/search/:origin/:destination/:month1/:day1/:year1/:month2/:day2/:year2/:class',function(req,res){
    var date1 = req.params.month1 + '/' + req.params.day1 + '/' + req.params.year1;
    var date2 = req.params.month2 + '/' + req.params.day2 + '/' + req.params.year2;
   mongo.db().collection('Flights').find({'origin':req.params.origin ,'destination': req.params.destination,'date':date1,'date':date2}).toArray().then(function (flights) {
    console.log("heloo");
    console.log(flights);
    res.send(flights);
    });
  });

  app.get('/api/flights/search/:origin/:destination/:month/:day/:year/:class', function(req,res){
    var date = req.params.month + '/' + req.params.day + '/' + req.params.year
    mongo.db().collection('Flights').find({'origin' :  req.params.origin,'destination' :req.params.destination, 'date' : date}).toArray().then(function (flights){
      console.log(flights);
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
  //creating token
  /*stripe.card.createToken({
  number: $('.card-number').val(),
  cvc: $('.card-cvc').val(),
  exp_month: $('.card-expiry-month').val(),
  exp_year: $('.card-expiry-year').val()
}, stripeResponseHandler);
*/
  //Booking
   app.post('/booking', function(req, res) {
    console.log(req.body);

    // retrieve the token
    var stripeToken = req.body.paymentToken;
    var flightCost  = req.body.cost;

    // attempt to create a charge using token
    stripe.charges.create({
      amount: 100,
      currency: "usd",
      source: stripeToken,
      description: "test"
    }, function(err, data) {
    if (err) res.send({ refNum: null, errorMessage: err});
    else
       {
        //putting reservation into db then get mongo_id
    var reference = mongo.db().collection('reservations').insert({'firstName':req.body.firstName,'lastName':req.body.lastName
        ,'passportNum':req.body.passportNum,'nationality':req.body.nationality,'birth': req.body.birth
        ,'email':req.body.email,'class':req.body.class,'outgoingFlightId':req.outgoingFlightId,'returnFlightId':
        req.returnFlightId,'paymentToken':req.body.paymentToken})._id;
    //sending mongo id with res
    console.log("past insertions");
    res.send({ refNum:reference , errorMessage:null});

       }
    });

});

  exports.seats;

};