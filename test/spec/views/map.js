/*global define, describe, expect, it */
'use strict';

define(['test/lib/chai', 'mapView'], function (chai, mapView) {
    describe('Map', function () {

        var expect = chai.expect;

        var map = new mapView();

        describe('#create', function() {
            it('map should is defined', function () {
                expect(map).not.to.equal(undefined);
            });
        });
    });
});