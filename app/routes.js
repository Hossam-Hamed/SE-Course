
/*
module.exports = function(app,mongo) {
    /**
     * Landing Page:
     */
    app.get('/', function(req, res) {
	res.sendFile('index.html');
	});


    /**
     * REST API:
     */




    app.get('/api/data/codes', function(req, res) {
      var codes =  require('./dummy data/flight.json');
      res.json( codes );
<<<<<<< HEAD
})};
=======
}); */
  /*  SEED DB */
  /*   app.get('/db/seed', function(req, res) {
    	db.seed();
    }); 
}
*/


module.exports = function(app) {

    var mongo   = require('db.js');
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


    

};
>>>>>>> f02ad3bc9d100cbc12a27140667d34ccbf59ba7a
