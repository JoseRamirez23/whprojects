

//variable
var randColor;

//making a function 
function getRandomColor(){

    randColor = Math.random();
    randColor = Math.floor(randColor * 360);
    document.body.style.backgroundColor = 'hsl(' + randColor +' , 50%, 50%)';
    //console.log(randColor);
}
//you are calling the function
getRandomColor();

console.log(window.innerWidth, window.innerHeight);
window.addEventListener('mousemove', function(e){

    var width =  Math.round( (e.x / window.innerWidth) * 100);
    var height =  Math.round( (e.y / window.innerHeight) * 100);
    document.body.style.backgroundColor = `hsl(${randColor}, ${width}%, ${height}%)`;
});

//you make a var for every button you have in your css and var for every paragraph
var leftBtn = document.getElementById('left');
var centerBtn = document.getElementById('center');
var rightBtn = document.getElementById('right');
var pLeft = document.getElementById('parLeft');
var pcenter = document.getElementById('middlePar');
var pRight = document.getElementById('parRight');


//you are making an event listener so when you click on a button it knows that you click and now you are calling a function
leftBtn.addEventListener('click',getLeftBtn);
centerBtn.addEventListener('click',getCenterBtn);
rightBtn.addEventListener('click',getRightBtn);

function getLeftBtn(){
//the alert works as a pop up once the button is clicked
 alert('Behind this door was a puppy that becomes your companion');
}

function getCenterBtn(){

alert('A woman appears behind the door and does a horrible screech you feel a sharp pain on your chest and you die, from the scare she gave you.');
}

function getRightBtn(){
alert('As soon as you touch this door knob a minotaur picks you up and breakes your neck.');

}






var myTimer = setInterval(updateTimer,1000);

function updateTimer(){

var theTime = new Date();

//HH:MM:SS

var timeStr =`
   

  ${theTime.toLocaleString('en-us',{hour: 'numeric',hour12:false, minute:'2-digit',second:'2-digit'})}
    
`;

document.querySelector('h4').textContent = timeStr;

}


var myDelay = setTimeout(hiliteBg,5000);

function hiliteBg(){

    document.body.classList.add('hitlite');
}


function runTimer(){

    var theTime = new Date();
    
    //HH:MM:SS
    
    var timeStr =`
       
    
      ${theTime.toLocaleString('en-us',{hour: 'numeric', hour12:false, minute:'2-digit',second:'2-digit'})}
        
    `;
    
    document.querySelector('h3').textContent = timeStr;
    
    }

    // document.getElementById("left").style.backgroundColor = "black";
    // document.getElementById("right").style.backgroundColor = "black";
    // document.getElementById("center").style.backgroundColor = "black";