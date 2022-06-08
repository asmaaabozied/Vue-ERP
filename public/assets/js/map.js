myMap() {
    var map = new google.maps.Map(document.getElementById("googleMap"),{
      center:new google.maps.LatLng(25.577944,30.993490),
      zoom:5
    });


    var marker=new google.maps.Marker({
        position:new google.maps.LatLng(25.577944,30.993490),
        map,
        draggable:true
      });

      var search=new google.maps.places.SearchBox(document.getElementById("pac"));
    google.maps.event.addListener(marker,'position_changed',function(){
      var lat=marker.getPosition().lat();
      var lng=marker.getPosition().lng();

      $('#lat').val(lat);
      $('#lng').val(lng);
    });


    google.maps.event.addListener(search,'places_changed',function(){
      var places=search.getPlaces();
      var bounds=new google.maps.LatLngBounds();
      var i,place;
      for(i=0;place=places[i];i++){
        bounds.extend(place.geometry.location);
        marker.setPosition(place.geometry.location);
          
      }
      
      map.fitBounds(bounds);
          map.setZoom(5);
    });




    }
