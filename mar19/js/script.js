document.getElementById('btn2').style.color="red";
//document.getElementById('btn2').style.fontSize="10px";

// console.log("This is a console message");
// console.info("This is a console info");
// console.warn("This is a warning");
// console.error("This is a error");


//Browser Alert box
//alert('Dont');

//Brower Confirm box
//var userResult=confirm("Ill tell you what");
//console.log(userResult);

//brower prompt box
// var userName= prompt("Why do you suck?");
// console.log(userName);


/*Variables 

must start with a low case
must start with a letter
Can contain underscore
can't contain hype
*/
var username;
var room1;
var user_name;
var userName;
var theUserFirstNameOnly;


//math variable
var age = 22;
var decade= 10;
var double= 2;
var divide= 4;
var newAge= ((age + decade) * double) / divide;

console.log(newAge);
//var stringAge ="22";

//var firstName =prompt("Tell me your first name!");
//var lastName =prompt("Tell me your last name!");
//alert(firstName +" and "+ lastName);


/* Interpolation
   ` ${variable}`

*/
//alert(`${firstName} ${lastName}`);


//prompt user for 
//the make of vehicle
//the year
//color
//alert the result


function getUserVehicle(){
    var vehicleType = prompt("What kind of vehicle");
    var year= prompt("What year was it made");
    var color= prompt("Tell your color now");
    alert(color+" "+year+" "+vehicleType);
}

function primaryUser(){


    var first = prompt("Whaat is your first name?");
    var last = prompt("Whaat is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('primaryUser').innerHTML = first + " " + last + " " + place;
}

function youKnow(){


    var pet =prompt("What is your pet name?");
    var color=prompt("What color is your pet?");
    var legs=prompt("How many legs does your animal have?")

    document.getElementById('youKnow').innerHTML= pet + " fur color is " + color + " and he has " +legs +" legs";
}

function myMusic(){


    var long= prompt("How long is your song");
    
}

