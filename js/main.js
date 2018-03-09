
document.getElementById("menu").checked = false;
new WOW().init();
var menu = document.getElementById("menu");

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