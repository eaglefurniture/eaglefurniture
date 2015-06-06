function initialize() {
  var mapOptions = {
    center: { lat: 48.431884, lng: -122.320315},
    zoom: 14
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var mountVernon = new google.maps.LatLng(48.431884, -122.320315);

  var marker = new google.maps.Marker({
    position: mountVernon,
    map: map,
    title:"Mount Vernon"
  });


}
google.maps.event.addDomListener(window, 'load', initialize);
