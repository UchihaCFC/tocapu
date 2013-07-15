/*global define, describe, expect, it */
'use strict';

define(['mapView'], function (mapView) {
    describe('Map', function () {

        var map = new mapView();

        describe('#create', function() {
            it('map should is defined', function () {
                expect(map).not.to.equal(undefined);
            });
        });
    });
});