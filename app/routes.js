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
})};