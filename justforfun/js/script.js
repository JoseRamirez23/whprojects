let headOne = document.querySelectorAll(
'h1');
let buttonOne = document.getElementById('button');

buttonOne.addEventListener('click',getButton);


function getButton(){

    alert("Carlos Suck");

}

// //variable
// let randomColor;

// //making a function 
// function getColor(){

//     randomColor = Math.random();
//     randomColor = Math.floor(randomColor * 360);
//     document.body.style.backgroundColor = 'hsl(' + randomColor +' , 50%, 50%)';

// }


// getColor();

// console.log(window.innerWidth, window.innerHeight);
// window.addEventListener('mousemove', function(e){

//     let width =  Math.round( (e.x / window.innerWidth) * 100);
//     let height =  Math.round( (e.y / window.innerHeight) * 100);
//     document.body.style.backgroundColor = `hsl(${randomColor}, ${width}%, ${height}%)`;
// });

