'use strict';

require.config({
    baseUrl: '../',
    paths: {
        jquery: 'app/vendor/jquery/jquery',
        cartodb: 'app/vendor/cartodb.js/dist/cartodb.nojquery',
        mapView: 'app/scripts/views/map'
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

require(['require', 'test/lib/chai', 'test/lib/mocha/mocha'], function(require, chai) {
    var expect = chai.expect;

    mocha.setup('bdd');

    require(['test/spec/views/map'], function(mapSpec) {
        mocha.run();
    });
});