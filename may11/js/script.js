// function addTwo(num){

//     return num + 2;

// }


// console.log( addTwo(2) );

// //let is kinda like var

// //(num,num2) () is for multi parameters
// let addFour = num=>  num + 4;
// ;

// console.log(addFour(2));

// function Counter(num){

//     this.num = num;
//     //let that = this;
//     this.timer = setInterval( () => {
//         //console.log(that);
//         this.num++;

//         //console.log(this.num);
//     }, 1000);

    
// }

// let num1 = new Counter(0);
// let num2 = new Counter(110);

// //console.log(num1,num2);

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//let numbersPlusTwo = [];




// for(let n = 0; n < numbers.length; n++){

//     numbersPlusTwo.push( numbers[n] + 2 );
// }


// //first x is the number, second index number, third the whole array
// numbers.forEach( x=> numbersPlusTwo.push( x + 2 ));

// //console.log(numbersPlusTwo);

// let numbersPlusTwo = numbers.map(x=> x + 2);

// console.log(numbers, numbersPlusTwo);

// numbersEvens = numbers[Symbol.iterator]();

// numbers.forEach( ()=>{

//     if(!numbersEvens.next().value % 2 ==0){
// console.log(numbersEvens.next());
//     }

// });

let numbersEven = numbers.filter(x => x % 2 == 0 );

console.log(numbersEven);


