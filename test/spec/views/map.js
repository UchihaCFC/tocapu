/*global define, expect, describe, it */
'use strict';

define(['app/scripts/views/map'], function(MapView) {
    var map = new MapView();

    describe('Map', function () {
        it('created correctly', function() {
            expect(map).not.toBe(undefined);
        });
    });
});