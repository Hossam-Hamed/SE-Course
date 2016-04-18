(function() {
    var client = require('mongodb').MongoClient;
    var fs = require('fs');
    var moment = require('moment');
    var db;

    module.exports = {
        init: function(dbURL, callback) {
            client.connect(dbURL, function(err, database) {
                if (err) console.log("[error] mongo connection: ", err);
                db = database;
                if (callback) callback();
            });
        },
        db: function() {
            return db;
        },
        close: function() {
            db.close();
        },
        seed: function(callback) {

            db.collection('Flights').count(function(err, count) {
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
                                "date": moment().add(i, 'days').calendar(),
                                //"date"          : new Date(),
                                "duration": flight.duration,
                                "origin": _origin,
                                "destination": _destination,
                                "seatmap": []
                            };

                            db.collection('Flights').insert(doc, function(err, data) {
                                if (err) console.log('error');
                                else console.log('insert successful');
                            });

                        }

                    }
                }
            });

            // seeding aeroplanes
            var aeroplanes = JSON.parse(fs.readFileSync('aircraft.json', 'utf8'));
            db.collection('AeroPlanes').count(function(err, count) {
                // assert.equal(err, null);
                if (count == 0) {
                    db.collection('AeroPlanes').insert(aeroplanes, function(err2, result) {
                        //assert.equal(null, err2);
                        // cb(err2, true);
                    });
                } else {
                    // cb(err, false);
                    console.log(count);
                }
            });

            //seeding airports
            var airports = JSON.parse(fs.readFileSync('airports.json', 'utf8'));
            db.collection('Airports').count(function(err, count) {
                // assert.equal(err, null);
                if (count == 0) {
                    db.collection('Airports').insert(airports, function(err2, result) {
                        //assert.equal(null, err2);
                        // cb(err2, true);
                    });
                } else {
                    // cb(err, false);
                    console.log(count);
                }
            });




            // var flights = JSON.parse(fs.readFileSync('Flights.json', 'utf8'));


            // db.collection('Flights').count(function(err, count){
            //   // assert.equal(err, null);
            //    if(count == 0){
            //       db.collection('Flights').insert(aeroplanes, function(err2, result) {
            //           //assert.equal(null, err2);
            //          // cb(err2, true);
            //       });



            //   } else {
            //      // cb(err, false);
            //      console.log(count);
            //   }
            // }      

        }
    }

})();