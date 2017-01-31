function initMap() {

  if (!document.getElementById('PropertyListMap')) {
    return;
  }

  // Create a map object and specify the DOM element for display.
  var propertyListMap = new google.maps.Map(document.getElementById('PropertyListMap'), {
    center: {
      lat: 53.5055999,
      lng: -2.1944638
    },
    scrollwheel: false,
    zoom: 12
  });
}