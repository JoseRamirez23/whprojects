// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pLast = document.querySelector('.p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize='28px';

// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize='8px';
// pClasses[3].style.color='orange';
// pClasses[1].style.fontWeight='boldest';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);
// pByClassname[0].style.fontSize='25px';

// var pByTagname = document.getElementsByTagName('p');
// console.log(pByTagname);
//pByTagname[9].style.color='blue';

// console.log(pByTagname.length);

//FOR Loop
// |--------------------| ARGUMENTS
// |---------| New Variable
//             |----| Number of loops
//                   |--| Incrementor
// for(var i = 0; i<10; i++){

//     pByTagname[i].style.color='red';
//     console.log(i);

// }

// for(var j=0; j<2; j++){

// pByTagname[j].style.color='green';
// console.log(j);
// }


// var myName = "Jose";
// console.log(myName.length);

// for(var i = 0; i< myName.length; i++){
//     console.log(i);
//     console.log(myName[i]);
// }

//var username;

// var userFirstName = prompt("What is your first name?");
// console.log(userFirstName.length);
// var userLastName = prompt("what is your last name?");
// console.log(userLastName.length);


// function username(){


    
// }


// function getUsername(){

//     var username =prompt("your name");
//     console.log(username +'from inside the function');
//     printUsername(username);/*ARGUMENT*/



// }

// getUsername();
// function printUsername(x){
    

//     for(var i=0; i< x.length;i++){

//         console.log(x[i]);
//     }
// }


// function getUserNums(){
// var num1 = prompt('Please enter a number');
// var num2 = prompt('Please enter another number');
// addUserNums(num1, num2);

// }


// function addUserNums(x,y){
// console.log(arguments);
// //alert(parseInt(x) +parseInt(y));
// }

// getUserNums();
var paragraphs = document.querySelectorAll('p');
function getUserColor(){
   // var userColors = prompt('pick some colors' );

    //  var colorOne=prompt('Please enter a color');
    //  var colorTwo=prompt('Please enter another color');
    //  var colorThree=prompt('Please enter your final color');
    // assignUserColors(colorOne,colorTwo,colorThree);
    var userColors = prompt('Pick three colors (comma separated)').split(',');

    var userTrimmedColors=[];
    for(var i = 0; i < userColors.length;i++){
        userTrimmedColors.push(userColors[i].trim());
    }
    assignUserColors(userTrimmedColors);
}




// var userPickedcolors = getUserColor(); 
// console.log(userPickedcolors);

function assignUserColors(x){

//console.log(x,y,z);

for(var i =0; i < x.length; i++){

    paragraphs[i].style.color=x[i];
}

}


getUserColor();


