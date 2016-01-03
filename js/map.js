function initialize() {
  var mapOptions = {
    center: { lat: 48.462191, lng: -122.338790},
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var burlington = new google.maps.LatLng(48.462191, -122.338790);

  var marker = new google.maps.Marker({
    position: burlington,
    map: map,
    title:"Mount Vernon"
  });


}
google.maps.event.addDomListener(window, 'load', initialize);
