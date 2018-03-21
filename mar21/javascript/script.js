function welcome(){
    var username = prompt("Tell me your name.");
    document.getElementById('welcome').innerHTML= username;


}
//welcome();


 function firework() {
     document.getElementById('h1').style.backgroundImage="url('/img/firework.gif')";
     document.getElementById('h1').style.color= username;
     toggleColor();
     //resizeheader();
     //navColor();



 }

function toggleColor(){

    document.body.classList.toggle('colorOne');

}