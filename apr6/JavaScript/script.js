// /**
//  * Math Object
//  * 
//  */

//  //INTEGERS - WHOLE NUMBER
//  //FLOATS - DECIMALS

//  //console.log(.1 * .3);

//  var wha = .1 * .2;
//  //0.0200000004


//  //Math.round();
//  var rounded = Math.round(wha);
//  //.49 && below rounds down
//  //.5 && up rounds up

// //Math.ceil();
//  var roundUp = Math.ceil(0.000000001);

//  //Math.floor();
//  var roundDown = Math.floor(0.9999999999);

//  //Math.PI
//  var pi = Math.PI;

//  //Math.pow();
//  //console.log( Math.pow(8,2));

//  //Math.sqrt
//  //console.log(Math.sqrt(64));


//  //Math.random();
//  //console.log(Math.random());

//  //console.log('.round():'+round, '.ceil():'+roundUp,'.floor():'+roundedDown,'.PI'+pi);

//  /**
//   *random number generator
//   */

//   var rand = Math.random();
//   rand = Math.floor(rand * 11);
//   console.log(rand);

//   function pickNum(){

//      var userNum = prompt('Guess a number from 1 to 10');
//     checkNum(userNum);
//   }

//   pickNum();

//   function pickAnotherNum(){
//     var userNum = prompt('Guess again');
//     checkNum(userNum);

//   }

//   function checkNum(num){

//     if(num < rand){

//         alert(num + 'is too low. do it again');
  //          pickAnotherNum();
//     }
//     else if(num > rand){

//         alert(num + 'is too high. do it again');
//     }
//     else{
//         alert(num + 'Congrats! you wasted time guessing')
//     }
//   }

var userPick = document.getElementById('userPick');
var submitBtn = document.querySelector('#numberPicked');
var submitRandom = document.querySelector('#changeNumber');
var userPickRes = document.querySelector('p');
// var printUserRes = document.querySelector('h1');


submitBtn.addEventListener('click', getUserPick);
submitRandom = addEventListener('click', getRandom);


//GLOBAL VARIABLE
var rand;
var attempts = 3;



function getRandom(){
    attempts = 3;
    userPickRes.innerHTML= ' ';
    userPick.value ='';
    rand = Math.random();
   rand = Math.floor(rand * 11);
  // console.log(rand);

}
getRandom();

function getUserPick(){
    attempts = attempts -1;
    var userChosen =  parseInt(userPick.value) ;
    checkUserPick(userChosen);
    userPick.value =' ';
}

function checkUserPick(x){

    if(attempts > 0){
    if(x < rand){

                 printUserRes(x + ' is too low. do it again');
                 
             }
             else if(x > rand){
        
                printUserRes(x + ' is too high. do it again');
             }


             else if(x == rand){
                printUserRes(x + ' Congrats! you wasted time guessing');
            }
            else{
                printUserRes(' wrong');
            }
        }
        else{
            printUserRes('Game over');
        }
       
    

}

function printUserRes(userRes){

    userRes.innerHTML = userRes;
   console.log(userRes);
}




var randColor;

function getRandomColor(){

    randColor = Math.random();
    randColor = Math.floor(randColor * 360);
    document.body.style.backgroundColor = 'hsl(' + randColor +' , 50%, 50%)';
    //console.log(randColor);
}
getRandomColor();

console.log(window.innerWidth, window.innerHeight);
window.addEventListener('mousemove', function(e){

    var width =  Math.round( (e.x / window.innerWidth) * 100);
    var height =  Math.round( (e.y / window.innerHeight) * 100);
   // document.body.style.backgroundColor ='hsl(' + randColor +',' + width + '%,' +height +'%)'
    //console.log('x-axis:' + Math.round(e.x / window.innerWidth),'y-axis' + Math.round(e.y/window.innerHight)*100);

    document.body.style.backgroundColor = `hsl(${randColor}, ${width}%, ${height}%)`;
});