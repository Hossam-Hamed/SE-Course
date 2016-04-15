module.exports = function(app) {
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
        var payload = jwt.verify(token, jwtSecret);
        req.payload = payload;
        next();
      } 
      catch (err) 
      {
        console.error('[ERROR]: JWT Error reason:', err);
        res.status(403).sendFile(path.join(__dirname, '../public', '403.html'));
      }

    });

}
/*
App.factory('API', function($http) {
  return {
    get : function() {
      return $http.get('/api/blogs');
    },
    getSecure : function() {
      return $http.get('/api/secure/blogs', {
        "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE0NjA3MTg4NTUsImV4cCI6MTQ5MjI1NDg1NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9.joYKQcvKRu50OWJgFT24qS13pjXLqFoQ9aPc8N1zxNo'},
      });
    },
    postSecure : function() {
      return $http.post('/api/secure/blogs', {        
        "wt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE0NjA3MTg4NTUsImV4cCI6MTQ5MjI1NDg1NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9.joYKQcvKRu50OWJgFT24qS13pjXLqFoQ9aPc8N1zxNo"
      });
    }       
  }
});
*/