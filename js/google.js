$(document).ready(function(){


$(".map2").css({"opacity":"0","visibility": "hidden", "transition": "opacity 1s" });

$(".arrowCon").on("click",function(){
  $(".arrowCon").remove();
  $(".topMap").hide();
  $(".map2").css({"opacity":"1","visibility": "visible"});
});
   

});

 function initMap(){  
  var markers = [
    {
      
        "lat": '36.1146832',
        "lng": '-115.2555595',
        "description": '<div class="MapDescription">Work: 12 minutes</div>  '
    },
    {
       
        "lat": '36.1252147',
        "lng": '-115.291785',
        "description": '<div class="MapDescription">Work: 17 minutes </div>  '
    },
    {
    
        "lat": '36.1448303',
        "lng": '-115.302484',
        "description": '<div class="MapDescription">Work: 10 minutes  </div> '
    },
    {
        
        "lat": '36.1446858',
        "lng": '-115.1753368',
        "description": '<div class="MapDescription">Work: 5 minutes  </div> '
    },
    {
        
        "lat": '36.0338694',
        "lng": '-115.2676475',
        "description": '<div class="MapDescription">Work: 6 minutes  </div> '
    }
    ];
    window.onload = function () {
        LoadMap();
    }
    function LoadMap() {
        var mapOptions = {
            center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
     
        var infoWindow = new google.maps.InfoWindow();
 
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title
            });
 
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {

                    infoWindow.setContent(
                      "<a class='googleDescription' href='detailRoom.html'>" + "<div class='housePre'>" + data.description + "</div>" +  "</a>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }
    }

    var map = new google.maps.Map(document.getElementById('drawmap'), {
    center: {lat: 36.1215, lng: -115.172813},
    zoom: 11
  });

  var drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        google.maps.drawing.OverlayType.RECTANGLE
      ]
    },
    markerOptions: {icon: 'images/beachflag.png'},
    circleOptions: {
      fillColor: '#ffff00',
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1
    }
  });
  drawingManager.setMap(map);

  var work = {lat: 36.1583875, lng: -115.1546736};
  var commonPlace= {lat:36.1252147 , lng:-115.291785};
  var home = {lat:36.0338694, lng:-115.2676475};

  

  }//end of init map function

  










