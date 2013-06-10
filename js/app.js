var MapView = Backbone.View.extend({
  tagName: 'div',
  id: '#map',
  createMap: function() {
    
  },
  createLayer: function() {
    
  }
});
(function() {

  var app = {};

  function init() {
    app.map = new MapView();
  }

  $(document).on('ready', init);

})();