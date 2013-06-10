(function() {

  var app = {};

  function init() {
    app.map = new MapView();
  }

  $(document).on('ready', init);

})();