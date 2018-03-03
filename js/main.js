
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