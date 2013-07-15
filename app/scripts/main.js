require.config({
    baseUrl: './',
    paths: {
        jquery: '../vendor/jquery/jquery',
        cartodb: '../vendor/cartodb.js/dist/cartodb.nojquery',
        map: 'scripts/views/map'
    },
    shim: {
        cartodb: {
            deps: ['jquery'],
            exports: 'cartodb'
        },
        jquery: {
            exports: 'jquery'
        }
    }
});

require(['map'], function (MapView) {
    'use strict';

    var app = {};

    app.map = new MapView();
});