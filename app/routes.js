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
        res.send("balabezoo");
      //  res.status(403).sendFile(path.join(__dirname, '../public', '403.html'));
      }

    })
app.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-Requested-with');
  next();
})
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

app.get('/api/flights/search',function(req,res){
req = require ('infoflight.json');
res.send(req);
})


};



