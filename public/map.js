


let map;
let map1;

function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.2827, lng: -123.1207},
    zoom: 8,
    disableDefaultUI: true
  });  

  map1 = new google.maps.Map(document.getElementById('map1'), {
    center: {lat: 49.2827, lng: -123.1207},
    zoom: 10,
    disableDefaultUI: true
  }); 
};
initialize();
