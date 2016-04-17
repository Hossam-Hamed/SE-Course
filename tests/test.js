var assert = require('chai').assert;
var app = require('../app/app.js');
var request = require('supertest');
var db = require('../app/db.js');

before(function(done) {
    db.init("mongodb://localhost:27017/balabezoo_test",function(err, db) {
        if (err) return done(err);
        else done();
    });
});

// quotes collection should be called quotes
describe('seed', function() {
    // before(db.clearDB);
    it('should populate the db if db is empty returning true', function(done) {
        db.seed(function(err, seeded) {
            if (err) return done(err);
            else done();
        });
    });

});

describe('API', function() {
    request = request(app);
    it("should return flights", function(done) {
        request.get('/api/flights/search/Mumbai/Delhi/05/01/2016')
            .end(function (err,res) {
                assert.equal(res.status, 200);
                console.log(res.body);
                done();
            });
    });
});

/*2 hours", "origin" : "Mumbai", "destination" : "Delhi", "seatmap" : [ ] }
{ "_id" : ObjectId("57128045bd596f281a65cfe8"), "flightNumber" : "SE2804", 
"aircraft" : "Airbus a318", "capacity" : "100", "date" : "05/01/2016", "duration" : "
*/