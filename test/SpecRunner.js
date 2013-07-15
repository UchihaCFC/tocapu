'use strict';

require.config({
    baseUrl: '../',
    paths: {
        jquery: 'vendor/jquery/jquery',
        cartodb: 'vendor/cartodb.js/dist/cartodb.uncompressed',
        mapView: 'app/scripts/views/map',
        mapSpec: 'test/spec/views/map'
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        cartodb: {
            deps: ['jquery'],
            exports: 'cartodb'
        }
    }
});

require(['test/spec/views/map'], function() {
    mocha.run();
});