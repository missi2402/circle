 jQuery(document).ready(function() {
     // google maps
     var myCenter = new google.maps.LatLng(50.000912, 36.251374);

     function initialize() {
         var mapProp = {
             scrollwheel: false,
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
     // slider
     $(".owl-carousel").owlCarousel({
         items: 4,
         loop: true,
         margin: 20,
         nav: true,
         navText: ["<img src='img/circle-left.png'>", "<img src='img/circle-right.png'>"],
         merge: true,
         responsiveClass: true,
         responsive: {
             0: {
                 items: 1
             },
             700: {
                 items: 2
             },
             1000: {
                 items: 4
             }
         },
         autoplay: true,
         autoplayTimeout: 9000,
         autoplayHoverPause: true,
         autoplaySpeed: 5000,
         smartSpeed: 1000
     });
     // scroll
     $('.nav a').click(function(event) {
         if($( window ).width() < 768) $('.navbar-toggler').click();
         event.preventDefault();
         var href = $(this).attr('href');
         var target = $(href);
         var top = target.offset().top;
         $('html,body').animate({
             scrollTop: top - 65
         }, 1200);
     });
 });
