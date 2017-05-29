  $(document).ready(function(){
    $('.modal').modal();
  });

  $('.datepicker').pickadate({
    selectMonths: true, 
    selectYears: 15 
  });

  function initMap(){
    var mapaContenedor = document.getElementById("map");
  	var coordenadasCDMX= {lat:19.2542, lng:-99.0740};
 
  	var mapa = new google.maps.Map(mapaContenedor,{
       zoom:8,
        center: coordenadasCDMX
      });
    var marcador = new google.maps.Marker({
      position: {lat:19.2542, lng:-99.0740},
      map:mapa,
      title: "CDMX",
      draggable: true,
 	});
 	 var ubication = document.getElementById("ubication");
 	 new google.maps.places.Autocomplete(ubication);
 };

 function prueba(){
 	alert("Los botones están bien enlazados");
 }

 var sendMessage = document.getElementById('sendMessage');
 var sendImage = document.getElementById('sendImage');
 var sendEvent = document.getElementById('sendEvent');
 var sendMedia = document.getElementById('sendMedia'); 	

 sendMessage.addEventListener("click", prueba);
 sendImage.addEventListener("click", prueba);
 sendEvent.addEventListener("click", prueba);
 sendMedia.addEventListener("click", prueba);
