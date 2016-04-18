
/*
module.exports = function(app,mongo) {

    app.get('/api/data/codes', function(req, res) {
      var codes =  require('./dummy data/flight.json');
      res.json( codes );
}); */
  /*  SEED DB */
  /*   app.get('/db/seed', function(req, res) {
    	db.seed();
    }); 
}
*/
    var mongo   = require('db.js');

module.exports = function(app) {

    var mongo   = require('db.js');
    var moment  = require('moment');

    // app.get('/api/data/codes', function(req, res) {
    //    var codes =  require('./dummy data/flights.json');
    //    res.json( codes );
    // });

        app.get('/db/delete',function(req,res){
        
        mongo.db().collection('Flights').deleteMany(function(err,data){
          if (err) {
                  res.send("Couldn't delete");
            throw error('flights delete faild');
          }
          else {
                  res.send("flights deleted");
            console.log("flighs delete many succesful");
          }
        });
        mongo.db().collection('Airports').deleteMany(function(err,data){
          if (err) {
                  res.send("Couldn't delete");
            throw error('airports delete faild');
          }
          else {
                  res.send("airports deleted");
            console.log("airports delete many succesful");
          }
        });

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


    

};