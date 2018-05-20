// var firstname = 'jose';

// function whatsName(){
//     var lastname = 'ramirez';
//     console.log(firstname);
//     whatsLastName(lastname);


// }

// whatsName();

// //console.log(lastname);

// //var
// //let
// //


// const name = 'jose';
// let color = 'grey';

// for(let i = 0; i < 5; i++){

//     console.log('running'  +i + 'times');
// }

// function whatsLastName(str){
// console(str);
// console.log(i);
// }

// console.log(name, color);
// color= 'red';

// console.log(color);

//console.log(i);

// for(i; i  < 10; i++){

// console.log('running again' + i + 'times');
// }

// let firstname = 'jose';
// let lastname ='ramriez';
// let nameCombined = `${firstName} ${lastName}`;






// let btn = document.querySelector('button');

// //console.log(btn);

// btn.addEventListener('click',function(evt)
// {

    
//     console.log(this);

//     //fat arrow function it helps by conutines to call the function
//     var colorizer = () =>  this.style.color='red';
    

//     colorizer();
// });

// var logCase = function(str){

// console.log(str);

// }

// logCase('jose');

var colors = ['red','blue','yellow','purple'];

for(let i = 0; i < colors.length; i++){

    console.log(colors[i]);
}


//java forEach loop
//forEach is exclusive for arrays
//first will be the element and second index which is the number, doesn't matter what you name it
colors.forEach(function(ele,idx){

console.log(ele,idx);

});


//for of loop
var nums = [10,20,30,40];
for(let num of nums){

    num -=1;
 console.log(num);


}

let myName = "jose ramirez";

for(let letter of myName){

    console.log(letter);
}
