 var app= require('./app/app.js');
var db= require('./app/db.js');
var dbURL= 'mongodb://localhost:27017/balabezoo'

db.init(dbURL,function(){
  app.listen('3000',function(){

console.log('OK');

  })


})

