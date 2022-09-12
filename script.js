function initMap() {
    const uluru = { lat: 48.6940846, lng: 21.2237353 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });

    google.maps.event.addListener(map, 'click', function (e) {
      var location = e.latLng;
      var data = "{" + '"latitude": ' + location.lat() + ',"longitude": ' + location.lng() + '}';
      $.ajax({
        type: "POST",
        url: "send_toilet.php",
        dataType: 'json',
        cache: false,
        data: data,
        success: function(data)
        {
          alert(data); 
        }
      });

      var marker = new google.maps.Marker({
          position: location,
          map: map
      });

      google.maps.event.addListener(marker, "click", function (e) {
          var infoWindow = new google.maps.InfoWindow({
              content: 'Latitude: ' + location.lat() + '<br />Longitude: ' + location.lng()
          });
          infoWindow.open(map, marker);
      });
    });
  }
  window.initMap = initMap;