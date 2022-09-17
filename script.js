function radioCheck() {
  if (document.getElementById("placeny").checked) {
    document.getElementById("kod").disabled = false;
  } else {
    document.getElementById("kod").disabled = true;
    document.getElementById("kod").value = null;
  }
}

function newMarkerButton() {
  var wrapper = document.getElementById("new_marker_information_wrapper");
  if (wrapper.style.display === "block") {
    document.getElementById("new_marker_information_wrapper").style.display = "none";
  } else {
    document.getElementById("new_marker_information_wrapper").style.display = "block";
  }
}

function initMap() {
  var map;
  function addInfoWindow(marker, message) {
    var infoWindow = new google.maps.InfoWindow({
        content: message
    });

    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
    });
  }
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,

  });
    var markerData;
  $.ajax({
    type: "GET",
    url: "get_toilets.php",
    success: function(data)
    {
      markerData = data.toString();
      const parsedJSON = JSON.parse(markerData);
      var pin = "";

      for (var i = 0; i < parsedJSON.length; i++) {
        var latitude = parsedJSON[i]["latitude"];
        var longitude = parsedJSON[i]["longitude"];
        var isFree = "Placene";
        if(Number(parsedJSON[i]["is_free"]) == 1) {
          isFree = "Zadarmo";
        }else {
          if(parsedJSON[i]["entry_code"].length > 0){
            pin = "PIN: " + parsedJSON[i]["entry_code"];
          }
        }

        var markerLocation = { lat: Number(latitude), lng: Number(longitude) };
        
        var newMarker = new google.maps.Marker({
          position: markerLocation,
          map
        });
        var contentString = 'Latitude: ' + markerLocation.lat + '<br />Longitude: ' + markerLocation.lng + "<br />" + isFree + "<br />" + pin; 
        addInfoWindow(newMarker,contentString);
      }
    }
  });
  var ltlg;
   function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    var ltlg = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.panTo(ltlg);
  }
  getLocation();
  google.maps.event.addListener(map, 'click', function (e) {
    var location = e.latLng;
    //rozsirit db a kod o poopis
    var popis = $("#popis").val();
    var radio = $("input[name='radio']:checked").val();
    var kod = "";
    if(radio == "Zdarma"){
      kod = '"0000"';
    } else {
       kod = $("input[name='kod']").val();
    }
    var latitude = location.lat();
    var longitude = location.lng();
    var data = "{" + '"latitude": ' + latitude + ',"longitude": ' + longitude + ',"isZadarmo": "' + radio + '","pin": ' + kod +'}';
    console.log(data);
    $.ajax({
      type: "POST",
      url: "send_toilet.php",
      dataType: 'json',
      cache: false,
      data: data,
      success: function(data)
      {
        //alert(data); 
      }
    });
    
    var fullForm = document.getElementById("popis");
    var isCheckedFree = document.getElementById("zdarma").checked;
    var isCheckedPaid = document.getElementById("placeny").checked;

    if (fullForm.value.length > 0 && (isCheckedFree || isCheckedPaid)) {
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });

      fullForm.value = null;
      var isCheckedFree = document.getElementById("zdarma").checked = true;
      document.getElementById("kod").value = null;
      document.getElementById("kod").disabled = true;
    } else {
      alert("Zadejte parametry toalety.");
    }
  google.maps.event.addListener(marker, "click", function (e) {
    var content = 'Latitude: ' + latitude + '<br />Longitude: ' + longitude + "<br />" + radio + "<br />" + kod;
    if(kod == '"0000"'){
      content = 'Latitude: ' + latitude + '<br />Longitude: ' + longitude + "<br />" + radio + "<br />";
    }
    var infoWindow = new google.maps.InfoWindow({
        content: content,
    });
    infoWindow.open(map, marker);
  });
});
}
window.initMap = initMap;