var should = require('should'),
    sleepsort = require('../lib/main');

describe('sleepsort', function () {
    describe('with an empty array argument', function() {
        it('calls the callback with an empty array', function (done) {
            var result = sleepsort([], function (result) {
                result.should.eql([]);
                done();
            });
        });
    });
});
