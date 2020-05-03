//  let map;
//   function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: ${data.latitude}, lng: ${data.longitude}},
//       zoom: 10,
//       disableDefaultUI: true
//     });
  
//   }


// const createMap= function(data,) {
//   let newMap = `
// <div id="map"></div>
//   <script>
//   let map;
//   function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: ${data.latitude}, lng: ${data.longitude}},
//       zoom: 10,
//       disableDefaultUI: true
//     });
  
//   }
//   </script>
//   `
//    return $(newMap);
// };

// const renderMaps = function(maps) {
  
//     let result = createMap(maps);
//     console.log(result);
    
//     $("#maps-container").prepend(result);
// };

// const maps = {
//   latitude: 49.2827,
//   longitude: -123.1207
// };

// $(document).ready(function() {
//   renderMaps(maps);
// });