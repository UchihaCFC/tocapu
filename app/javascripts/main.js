require.config({
  baseUrl: '../',
  paths: {
    jquery: 'vendor/jquery/jquery',
    cartodb: 'vendor/cartodb.js/dist/cartodb.nojquery',
    map: 'app/javascripts/views/map'
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

require(['jquery', 'cartodb', 'map'], function ($, cartodb, MapView) {
  'use strict';

  var app = {};

  app.map = new MapView();
});