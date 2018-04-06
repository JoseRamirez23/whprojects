//when it says var menu it has no meaning till you give menu a menaing
var menu = document.getElementById('menu'); //this is the first button by the name of menu
var username = document.getElementById('username'); //this button had the name username
var userstyle=document.getElementById('userstyle'); //this button name is userstyle

var nav = document.getElementById('nav');//right here you are telling it to target the nav or when you put 'nav' you will be working on it
var main = document.getElementById('main'); //you are targeting the main and everything in it
var user = document.getElementById('user');//you are getting the span but it has an id by the name user
var a1 = document.getElementById('a1'); //you are targeting an archor by the name of a1
var a2 = document.getElementById('a2');

//right you are telling it to wait till you see some one click one menu button
menu.addEventListener('click', vertMenu);
username.addEventListener('click',getUsername );
userstyle.addEventListener('click', styleUsername);

a1.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e);
    this.style.color ="pink";

}

);//This says "anonymous function" in Matt's comment

a2.addEventListener('click', colorText2);

function changeBody(){

document.body.style.backgroundColor ='gray';

}
//you have tell the function to active so you put the code in the bottom
changeBody();

function vertMenu(){

    nav.classList.toggle('vertical');
    main.classList.toggle('vertical');
}

function getUsername(){

    var username = prompt('what is your name?');
    user.innerHTML = username;
}

function styleUsername(){

    user.classList.add('mega');
}


function colorText2(e){

    e.preventDefault();
    console.log(e);
    a2.style.color="yellow";
}

