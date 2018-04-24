var paras = document.querySelectorAll('p');



// for(var i = 0; i < paras.length; i++){
// //console.log(paras[i].classList.contains('para'));

//     //! = the opposite of what you want
//     // if(!paras[i].classList.contains('para')){

//     //     console.log('thats not true');
//     // }

//     if(1){

//         console.log('thats not true');
//     }

// }

// console.log(3==='3');

// console.log(typeof(3));
// console.log(typeof('3'));

// == loose comparison
// === strict comparison

// var usernum = parseInt(prompt('pick a number'));


// if(!usernum){
//     console.log(3 + usernum);

// }else{

//     console.log('Wrong do it again');
// }

// console.log(3 + usernum);

var weatherKey = '7fe4afa3a57257aea3dc1b3da9e03ea6';
var myUl = document.querySelector('ul');

//XMLHttpRequest
console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();

//opens up a channel
//'get' doesn't have to be cap
req.open('GET' , 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=7fe4afa3a57257aea3dc1b3da9e03ea6');

req.onload = function(){

        if(req.readyState === 4){
            //console.log(req.responseText);
            var apiData =  JSON.parse(req.responseText) ;
            //console.log(apiData.emojis_url);

            processData(apiData);


        }

}


//we dont want to sent but to recieve
req.send(null);


function processData(data){

    //console.log(data);

    for(var i = 0; i < data.list.length; i++){
        var weatherDesc = data.list[i].weather[0].description;
        //console.log(timeOfDay);
        var myLi = `
        <li>
            <p>${weatherDesc}</p>
        </li>
        
        `;

        myUl.innerHTML +=myLi;
        //console.log(data.list[i]);

    }
}


