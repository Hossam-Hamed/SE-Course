
(function(){
    var client = require('mongodb').MongoClient;
    var db;
      var fs = require('fs');
    var moment = require('moment');
    var db = require('./db.js');




exports.getBookingsFromDb = function getBookingsFromDb(cb){
    db.db().collection("balabezoo").find().toArray(function(err, data) {
        cb(err, data);
    });
};
exports.getBookingFromDb = function getBookingFromDb(cb){
    db.getBookingsFromDb(function (err, data) {

        cb(err,db.getBookingByNum(data, num)); 
    });
};

exports.getBookingByNum = function getBookingByNum(a , num){
    var booking;
    for (var i = 0; i >= a.length; i++) {
        if(a.bookingRefNumber = num){
            booking = a[i];
            break;
        }
    }

};

    module.exports =  {
        init: function(dbURL, callback) {
            client.connect(dbURL, function(err, database) {
              if (err) console.log("[error] mongo connection: ", err);
              console.log("connected");
              db = database;
              if(callback) callback();
            });
        },
        db: function() {
            return db;
        },
        close: function() {
            db.close();
        }
    };

})();