var navBtn = document.getElementById("navBtn");
var nav = document.getElementById("nav");

//target ellement by declared variable
navBtn.style.color="red";
navBtn.style.fontSize="10px";

navBtn.addEventListener("click", showNav);

function showNav(){

    nav.classList.toggle("viewNav");
    navBtn.classList.toggle("active");
}
