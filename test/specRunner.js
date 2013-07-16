require.config({
    baseUrl: '../',
    paths: {
        jquery: 'vendor/jquery/jquery',
        cartodb: 'vendor/cartodb.js/dist/cartodb.nojquery',
        mocha: 'test/lib/mocha/mocha',
        chai: 'test/lib/chai/chai'
    },
    shim: {
        cartodb: {
            deps: ['jquery'],
            exports: 'cartodb'
        },
        mocha: {
            exports: 'mocha'
        }
    }
});

require(['require', 'mocha'], function (require, mocha) {
    'use strict';

    mocha.setup('bdd');

    require([
        'test/spec/test-spec',
        'test/spec/views/map'
    ], function () {
        mocha.run();
    });
});