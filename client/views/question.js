Template.question.rendered = function() {
    $("#btn-northeast").click(function(){
    		window.location = "northeast";
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
	$("#btn-other").click(function(){
		window.location = "other";
	});
};