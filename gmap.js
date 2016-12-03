$(function(){
	'user strick';
	var map, marker;
	var mapDiv = document.getElementById('map');
	var myLatlng = new google.maps.LatLng(-0.915179,100.4608776)
	function initMap(){
		map = new google.maps.Map(mapDiv, {
    center: myLatlng,
    zoom: 16,
	zoomControl: false,
	streetViewControl: false,
	}); 
	marker = new google.maps.Marker({
		position: myLatlng,
		map : map,
		title: 'hello waord',
		icon: 'css/icon.png',
		draggable: true,
	});
	
	google.map.event.addDomListener(marker, 'dragstart', function(event){
		console.log('dragstart marker', event);
	});
	google.map.event.addDomListener(marker, 'dragend', function(event){
		console.log('dragend marker', event.latLng.lat(), event.latLng.lng());
		getNewMarker();
	});
	
	geolocate();
	};
	
	function ZoomControl(){
		var zoomInButton = document.getElementById('zoom-in');
		var zoomOutButton = document.getElementById('zoom-out');
		google.maps.event.addDomListener(zoomInButton, 'click', function(){
			map.setZoom(map.getZoom()+1);
		});
		google.maps.event.addDomListener(zoomOutButton, 'click', function(){
			map.setZoom(map.getZoom()-1);
		});
	}
	function GeolocationControl(){
		var geoButton = document.getElementById('current-location');
		google.maps.event.addDomListener(geoButton, 'click', geolocate);
	};
	
	function geolocate(){
		if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position);
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
	  marker.setPosition(pos); 
    }); 
		}else{
		alert('gagal')	;
	} 
  };
  
  var markers = [
  {'lat':-0.915752, 'lng': 100.456352},
  {'lat':-0.917426, 'lng': 100.453323},
  {'lat':-0.908071, 'lng': 100.461327},
  {'lat':-0.913864, 'lng': 100.461288},
  {'lat':-0.918048, 'lng': 100.459953},
  ];
  function getNewMaker(){
	  for (var i = markers.length - 1; i >=0; i--){
		  creatMarkers(markers[i]);
	  
	  }
  };
  
  function creatMarkers(pos){
	  var newMarker = new google.maps.Marker({
		  position: pos,
		  map: map,
	  })
  };
  
	
	initMap();
	ZoomControl();
	GeolocationControl();
	getNewMarker();
	
});