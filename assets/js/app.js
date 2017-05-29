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

 var sendMessage = document.getElementById('sendMessage');
 var sendImage = document.getElementById('sendImage');
 var sendEvent = document.getElementById('sendEvent');
 var sendMedia = document.getElementById('sendMedia'); 
 var publicPost = document.getElementById('publicPosts');
 var file = document.getElementById("image-file");

 function prueba(){
 	alert("Los botones están bien enlazados");
 }

 function postMessage(){
 	var titleMessage = document.getElementById('chatTitle');
 	var message = document.getElementById("chatMessage");
 	var newDiv =document.createElement('div');
 	var newTitleMessage = document.createElement("h3");
 	var nodeTitle = document.createTextNode(titleMessage.value);
 	var newMessage = document.createElement('p');
 	var nodeMessage = document.createTextNode(message.value);
 	newMessage.appendChild(nodeMessage);
 	newTitleMessage.appendChild(nodeTitle);
 	newDiv.appendChild(newTitleMessage);
 	newDiv.appendChild(newMessage);
 	publicPost.appendChild(newDiv);
 	newDiv.classList.add('card-panel', 'hoverable');
 	newDiv.draggable=true;
 	titleMessage.value= " ";
 	message.value=" ";
 	closeModal();
 };

function load (e) {

	var file=e.target.files;
	publicPost.innerHTML=" "; 
	if(!mypicture.type.match(/image/)){
		alert("selecciona una imagen")
	} else {
		publicPost+="Nombre del archivo "+ mypicture.name + "<br>";
		var reader = new FileReader();
		reader.readAsDataURL(e.files[0]);
		reader.addEventListener("load", postPicture);
	}
};

function postPicture(e){
	var resultado=e.target.result;
	publicPost.innerHTML+="<img src='"+resultado+"'>";
	closeModal()
};

function closeModal(){
	$('.modal').modal('close');
};

 sendMessage.addEventListener("click", postMessage);
 sendImage.addEventListener("click", postPicture);
 sendEvent.addEventListener("click", prueba);
 sendMedia.addEventListener("click", prueba);
 file.addEventListener("change", load);