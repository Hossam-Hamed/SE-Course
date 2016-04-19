module.exports = function(app) {

    var mongo = require('../db.js'); 
     var moment = require('moment');
    var fs = require('fs');

    app.get('/api/data/codes', function(req, res) {
       var codes =  require('./dummy data/flight.json');
       res.json( codes );
    });
    app.get('/db/seed',function(callback) {

            mongo.db().collection('Flights').count(function(err, count) {
                if (count == 0) {


                    var routes = JSON.parse(fs.readFileSync('flights.json', 'utf8'));
                    for (var i = 0; i < routes.length; i++) {
                        var route = routes[i];
                        seedFlights(route, route.origin, route.destination);
                    }

                    // insert returning flights
                    for (var i = 0; i < routes.length; i++) {
                        var route = routes[i];
                        seedFlights(route, route.destination, route.origin);
                    }

                    function seedFlights(flight, _origin, _destination) {
                        // loop until May 31 2016 starting today April-15-2016
                        for (var i = 1; i <= 46; i++) {
                            doc = {

                                "flightNumber": flight.flightNumber,
                                "aircraft": flight.aircraft,
                                "capacity": flight.capacity,
                                "Arrivaldate": moment().add(i, 'days').calendar(),
                                "DepartureDate": moment().add(i, 'days').calendar(),

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

                    }
                }
            })
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
                    console.log(count);
                }
            });





          });

    
    app.get('/db/delete',function(req,res){
        
        mongo.db().collection('Flights').deleteMany(function(err,data){
          if (err) {
                  res.send("Couldn't delete");
            throw error('flights delete faild');
          }
          else {
                  res.send("Deletion succesful");
            console.log("flighs delete many succesful");
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


  })};