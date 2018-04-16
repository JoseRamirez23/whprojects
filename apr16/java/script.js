

var theDate = new Date();
console.log(theDate);
console.log(theDate.getDate());
console.log(theDate.getDay());
console.log(theDate.getFullYear());
console.log(theDate.getMonth());

console.log(theDate.toLocaleString('en-us',{month:'long'}));

var myBday = new Date(1996, 14, 03);
console.log(myBday.toLocaleDateString());

var dateStr = `
    Today's date is ${theDate.getDate()}th of ${theDate.toLocaleString('en-us',{month:'long'})} ${theDate.getFullYear()}
`;

//document.body.textContent = myBday;

// var myBday=`
// My birthday is on ${myBday.toLocaleDateString()}

// `;
var stopBtn = document.querySelector('button');

stopBtn.addEventListener('click',function(){clearInterval(myTimer);
});

var myTimer = setInterval(updateTimer,1000);

function updateTimer(){

var theTime = new Date();

//HH:MM:SS

var timeStr =`
   

  ${theTime.toLocaleString('en-us',{hour: 'numeric',hour12:false, minute:'2-digit',second:'2-digit'})}
    
`;

document.querySelector('h3').textContent = timeStr;

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