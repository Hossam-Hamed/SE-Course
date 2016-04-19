//additional require
var jwt     = require('jsonwebtoken');
//this is middleware i think
app.use(function(req, res, next) {

      // check header or url parameters or post parameters for token
      var token = req.body.wt || req.query.wt || req.headers['x-access-token'];   

      console.log("{{{{ TOKEN }}}} => ", token);

      var jwtSecret = process.env.JWTSECRET;

      // Get JWT contents:
      try 
      {
        var origin = jwt.verify(token, origin);
        var destination = jwt.verify(token,destination);
        var departingDate = jwt.verify(token,departingDate);
        var returningDate = jwt.veriy(token,returningDate);
        var Class = jwt.verify(token,class);
        req.origin = origin;
        req.destination = destination;
        req.departingDate = departingDate;
        req.returningDate = returningDate;
        req.class = Class;
        next();
      } 
      catch (err) 
      {
        console.error('[ERROR]: JWT Error reason:', err);
    //    res.status(403).sendFile(path.join(__dirname, '../public', '403.html'));
      }

    });
/*
App.factory('API', function($http) {
  return {
    get : function() {
      return $http.get('/api/blogs');
    },
    getSecure : function() {
      return $http.get('/api/secure/blogs', {
        "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZWNvdXJzZS5jb20iLCJpYXQiOjE0NjAyNDAxMTYsImV4cCI6MTQ5MTc3NjExNiwiYXVkIjoic2Vjb3Vyc2UuY29tIiwic3ViIjoiY3NlbjYwMyJ9.4iRS_LlETx9N1dUy7VYcSF4cqPrk92CC-TB13I_Vpdc'},
      });
    },
    postSecure : function() {
      return $http.post('/api/secure/blogs', {        
        "wt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZWNvdXJzZS5jb20iLCJpYXQiOjE0NjAyNDAxMTYsImV4cCI6MTQ5MTc3NjExNiwiYXVkIjoic2Vjb3Vyc2UuY29tIiwic3ViIjoiY3NlbjYwMyJ9.4iRS_LlETx9N1dUy7VYcSF4cqPrk92CC-TB13I_Vpdc"
      });
    }       
  }
});
*/