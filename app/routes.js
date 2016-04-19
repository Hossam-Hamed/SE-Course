module.exports = function(app) {

    var mongo   = require('./db.js');
    var moment  = require('moment');

    var seats;


    app.get('/', function(req, res) {
        res.sendFile('index.html');
    });


    app.get('/api/baalabezoo/:from/:to/:flightDate/:cabin', function(req, res) {
     seats = mongo.db().collection('balbezoo').find().toArray(function(err, docs) {
        cb(err, docs);
    })
 });

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
    exports.seats;

}
    // =======
    // module.exports = function(app) {

    //     var seats;

    //     >>>>>>> 04c6c26af0fb30cde0e1e56b84f26080ff2d5d5e


    //     app.get('/', function(req, res) {
    //         res.sendFile('index.html');
    //     });


    //     app.get('/api/baalabezoo/:from/:to/:flightDate/:cabin', function(req, res) {
    //        seats = mongo.db().collection('balbezoo').find().toArray(function(err, docs) {
    //           cb(err, docs);
    //       })
    //    });

    //     exports.seats;

    // };


