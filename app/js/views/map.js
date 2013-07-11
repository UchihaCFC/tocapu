/*global Backbone, define*/

define(['jquery', 'cartodb'], function ($, cartodb) {
  'use strict';

  var MapView = Backbone.View.extend({
    tagName: 'div',
    id: 'map',
    createMap: function () {},
    createLayer: function () {}
  });

  return MapView;
});