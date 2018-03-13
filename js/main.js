
document.getElementById("menu").checked = false;
new WOW().init();
var menu = document.getElementById("menu");
var languajes; 
var translation = false; 
var video = document.getElementById("video"); 
$(document).ready(function(){
  $('.testimonials-slider').slick({
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
  });

  $.getJSON('./json/translationIndex.json', function(data){
        languajes = data
    });
});
function playVideo(){
    document.getElementById("play-button").style.display = "none";
    video.play(); 
}
function pauseVideo(){
    document.getElementById("play-button").style.display = "block";
    video.pause(); 

}
function translating(){
    if(translation == false){
        lang = languajes.english
        $("#about").text(lang.menu.nosotros);
        $("#services").text(lang.menu.servicios);
        $("#gallery").text(lang.menu.galeria);
        $("#cases").text(lang.menu.casos);
        $("#contact").text(lang.menu.contacto);

        $("#seccion1-subtitulo").text(lang.seccion1.subtitulo);
        $("#seccion1-parrafo").text(lang.seccion1.parrafo);
        $("#seccion1-button").text(lang.seccion1.boton);
        translation = true  
    }
    else{
        lang = languajes.spanish
        $("#about").text(lang.menu.nosotros);
        $("#services").text(lang.menu.servicios);
        $("#gallery").text(lang.menu.galeria);
        $("#cases").text(lang.menu.casos);
        $("#contact").text(lang.menu.contacto);

        $("#seccion1-subtitulo").text(lang.seccion1.subtitulo);
        $("#seccion1-parrafo").text(lang.seccion1.parrafo);
        $("#seccion1-button").text(lang.seccion1.boton);
        translation = false 
    }
}
function menuClick(){
    if (menu.checked == true) {
            document.getElementById("header-bottom-right").style.display = "flex"; 
        } else {
            document.getElementById("header-bottom-right").style.display = "none";
        }
}

function resize(){
	if(window.innerWidth >= 576){
		document.getElementById("header-bottom-right").style.display = "flex";
	}
	else {
        document.getElementById("header-bottom-right").style.display = "none";
	}
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
function initMap(position) {
    console.log(position.coords);
    document.getElementById("map").style.display = 'inherit';

    var position = {lat: position.coords.latitude, lng: position.coords.longitude};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: position
    });
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initMap);

    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

$(".nav-item a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
          });
        }
    });