 jQuery(document).ready(function() {
     var myCenter = new google.maps.LatLng(50.000912, 36.251374);

     function initialize() {
         var mapProp = {
             center: myCenter,
             zoom: 17,
             mapTypeId: google.maps.MapTypeId.ROADMAP
         };
         var image = 'img/map.png';
         var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
         var marker = new google.maps.Marker({
             position: myCenter,
             icon: image
         });
         marker.setMap(map);
     }
     google.maps.event.addDomListener(window, 'load', initialize);
 });
