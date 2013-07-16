define(['chai'], function (Chai) {
    'use strict';

    var expect = Chai.expect;

    describe('@sum', function () {
        it('2 + 2 should equal 4', function () {
            expect(4).to.be.equal(2 + 2);
        });
    });
});