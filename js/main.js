
document.getElementById("menu").checked = false;
new WOW().init();

function menuClick(){
    var menu = document.getElementById("menu");
    if (menu.checked == true) {
            document.getElementById("header-bottom-right").style.display = "flex"; 
        } else {
            document.getElementById("header-bottom-right").style.display = "none";
        }
}