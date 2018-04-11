// function welcomeMsg(str){

// //console.log(str);
// return "Welcome" + str;
// }

// //consoleInfo('Jose');
// console.log( welcomeMsg('Jose') );

// function calcNums(x, y){

//     //console.log(x + y);
//     return x + y;
// }

// console.log(calcNums(3,2));

// function concatStrings(str1, str2){

//     return str1 + " " + str2;
// }

// var h3 = document.querySelector('h3');
// var user = document.querySelector('#user');

// function getFirstname(){

// return prompt('What is your first name?');

// }

// function getLastname(){
//     return prompt('What is your last name?');

// }

// user.textContent = concatStrings( getFirstname(),getLastname() );
// //html.innerHTML =n

// // function welcomeUser(){

// // h3.innerHTML = concatStrings( getFirstname(),getLastname() );

// // }

// // welcomeUser();

var spans = document.querySelectorAll('span');
var occupations =['janitor','teacher','developer','plumber','cashier','bus driver'];
var plurals = ['fish','monkeys', 'shoe','cactii'];
var  adjectives= ['mighty find','cold', 'smelly','juicy'];
var verbs = ['slept','eat', 'ran','tripped'];
var liquids = ['acid','beer', 'soda','rubbing achocol'];
var famous =['Donald J Trumps','Ronald Reagon'];
var place = ['my house','white house', 'new york'];
var noun =['monkey','snake','ice','fire'];
var nationality = ['Salvadorean','African','Eurpeon'];
var female = [' Betty white'];
var friend =['Kathy']
//console.log(spans.length);


for(var i = 0; i < spans.length; i++ ){

    //console.log(spans[i].className);

    // if(span[i].className == 'plural'){

        
    // }

    switch(spans[i].className){
        case 'occupation':
            

            //console.log( occupations[getRandNum( occupations.length )]);
            spans[i].textContent = occupations[getRandNum( occupations.length )];
            break;

        case 'plural':
         //spans[i].style.color='red';
         spans[i].textContent =  plurals[getRandNum( plurals.length )];
         break;

        case 'adjective':
            //spans[i].style.color='blue';
            spans[i].textContent =  adjectives[getRandNum( adjectives.length )];
            break;

         case 'verb':
            //spans[i].style.color='blue';
            spans[i].textContent =  verbs[getRandNum( verbs.length )];
            break;

        case 'liquid':
            //spans[i].style.color='blue';
            spans[i].textContent =  liquids[getRandNum( liquids.length )];
            break;
        
            default:
            spans[i].style.color='green';



    }
}

function getRandNum(num){
//  console.log(num);
//  var rand = Math.floor(Math.random() * num);
//  console.log(rand);

 return Math.floor(Math.random() * num);

}

    
