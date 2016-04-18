
module.exports = function(app) {

    var mongo   = require('./db.js');
    var moment  = require('moment');
     /**
     * Seed Flights Collection:
     */
    // app.get('/seed/flights', function (req, res) {

    //   // insert outgoing flights
    //   for (var i = 0; i < routes.length; i++) {
    //     var route = routes[i];
    //     seedFlights(route, route.origin, route.destination);
    //   }

    //   // insert returning flights
    //   for (var i = 0; i < routes.length; i++) {
    //     var route = routes[i];
    //     seedFlights(route, route.destination, route.origin);
    //   }

    // });
    app.get('/api/baalabezoo/:bookingRefNumber', function(req, res) {
        mongo.getBookingFromDb(function(err, data) {
        res.send(data); //one random quote

    });
    });

    app.get('/api/sum/:x/:y', function(req, res) {
       var x = parseInt(req.params.x);
       var y = parseInt(req.params.y);
       res.send((x + y) + '');
   });


    app.get('/', function(req, res) {
        res.sendFile('index.html');
    });


};
