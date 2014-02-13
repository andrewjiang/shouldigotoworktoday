if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to sigtw.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.northeast.rendered = function() {
    $(document).ready(function(){
      function initialize() {
        var mapOptions = {
          zoom: 6,
          center: new google.maps.LatLng(39.8315166,-74.3260091),
          mapTypeId: google.maps.MapTypeId.SATELLITE
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var weatherLayer = new google.maps.weather.WeatherLayer({
          temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
        });
        weatherLayer.setMap(map);

        var cloudLayer = new google.maps.weather.CloudLayer();
        cloudLayer.setMap(map);
      }

      google.maps.event.addDomListener(window, 'load', initialize);
    });
};
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

