
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

module.exports = function(app) {

    var mongo   = require('./db.js');
    var moment  = require('moment');

    

app.get('/', function(req, res) {
res.sendFile('index.html');
}
);

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


}
