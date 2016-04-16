module.exports = function(app,mongo) {

	  var jwt     = require('jsonwebtoken');
    var express = require('express');
    var path    = require('path');


     var mongo   = require('./db');
    var moment  = require('moment');


    routes = [
      {'origin': 'Mumbai', 'destination': 'Delhi', 'duration': '2 hours', 'capacity': 100, 'aircraft': 'Airbus a318', 'flightNumber': 'SE2804'},
      {'origin': 'Cairo', 'destination': 'Jeddah', 'duration': '2 hours', 'capacity': 100, 'aircraft': 'Airbus a318', 'flightNumber': 'SE2804'},
      {'origin': 'Hong Kong', 'destination': 'Taiwan', 'duration': '2 hours', 'capacity': 100, 'aircraft': 'Airbus a318', 'flightNumber': 'SE2804'},
      {'origin': 'Johannesburg', 'destination': 'Cape Town', 'duration': '2 hours', 'capacity': 100, 'aircraft': 'Airbus a318', 'flightNumber': 'SE2804'},
      {'origin': 'Riyadh', 'destination': 'Jeddah', 'duration': '2 hours', 'capacity': 100, 'aircraft': 'Airbus a318', 'flightNumber': 'SE2804'},
      {'origin': 'London Heathrew', 'destination': 'New York-John F. Kennedy', 'duration': '2 hours', 'capacity': 100, 'aircraft': 'Airbus a318', 'flightNumber': 'SE2804'},
      {'origin': 'Las Vegas', 'destination': 'Las Angeles', 'duration': '2 hours', 'capacity': 100, 'aircraft': 'Airbus a318', 'flightNumber': 'SE2804'},
      {'origin': 'Las Angeles', 'destination': 'San Francisco', 'duration': '2 hours', 'capacity': 100, 'aircraft': 'Airbus a318', 'flightNumber': 'SE2804'},
      {'origin': 'Frankfurt', 'destination': 'Berlin', 'duration': '2 hours', 'capacity': 100, 'aircraft': 'Airbus a318', 'flightNumber': 'SE2804'},
      {'origin': 'Rome', 'destination': 'Milan', 'duration': '2 hours', 'capacity': 100, 'aircraft': 'Airbus a318', 'flightNumber': 'SE2804'}
    ];

    /**
     * Seed Flights Collection:
     */
    app.get('/db/seed', function (req, res) {

      // insert outgoing flights
      for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        seedFlights(route, route.origin, route.destination);
        // console.log(routes[i]);
      }

      // insert returning flights
      for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        seedFlights(route, route.destination, route.origin);
      }

    });
function seedFlights(flight, _origin, _destination) {

      // loop until May 31 2016 starting today April-15-2016
      for (var i = 1; i <= 46; i++) {

        doc = 
        {
          "flightNumber"  :   flight.flightNumber,
          "aircraft"      :   flight.aircraft,
          "capacity"      :   flight.capacity,
          "date"          :   moment().add(i, 'days').calendar(),
          "duration"      :   flight.duration,
          "origin"        :   _origin,
          "destination"   :   _destination,
          "seatmap"       :   []
        };

        mongo.db().collection('flights').insert(doc, function(err, data){
          if (err) console.log('error');
          else console.log('insert successful');
        });
    
      }
    }

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
})};