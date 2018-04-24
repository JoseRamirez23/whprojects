
var characterUl = document.querySelector('ul');
var homeUrl = 'https://rickandmortyapi.com/api/character';


// $.ajax({
//     url: "https://rickandmortyapi.com/api/character",
    
//   }).done(getCharacter);

function getReq(url,func){

var req = new XMLHttpRequest();
req.open('GET', url);

req.onload = function(){
    
    if(req.readyState === 4 && req.status === 200){

        console.log('success!', req.statusText);
        func(JSON.parse(req.responseText));

    }else{

        console.log('error.', req.statusText);
    }
   // console.log(req);
}
req.send(null);
}

getReq(homeUrl,getCharacters);

// characterUl.addEventListener('click',function(evt){
// console.log(this);
// console.log(evt);


// });
var characterURL;

$('body > ul').on('click','li', function(evt){

    
    if(this.dataset.url){

        characterURL = this.dataset.url;
        characterUl.innerHTML='';
        getReq(characterURL,getCharacter);
    }

});
function getCharacter(character){

    console.log(character);

    var character = `
    <li data-url ="${character.url}">
        
        <img src="${character.image}" alt="${character.name}">
        <div>
        <h3>${character.name}</h3>
            <ul>
                <li><b>Species:</b> ${character.species}</li>
                <li><b>Status:</b> ${character.status}</li>
                <li><b>Gender:</b> ${character.gender}</li>`;

                
                    if(!character.type == ""){
                    
                    character += `<li><b>Type:</b>${character.type}</li>`

                    }

                    character += `
                    
                    <li><b>Type:</b>${character.status}</li>
                    `;
                    
                    
                   
    characterUl.innerHTML = character; 
}










function getCharacters(characters){
//     var characterLink = document.querySelectorAll('a');
 

//you console so you can check what you want from array
//console.log(JSON.parse(characters));

var characterArray = characters;
for(var i = 0; i < characterArray.results.length; i++){
    

    console.log( characterArray.results[i] );

    var character = `
    <li data-url ="${characterArray.results[i].url}">
        
        <img src="${characterArray.results[i].image}" alt="${characterArray.results[i].name}">
        <div>
        <h3>${characterArray.results[i].name}</h3>
            <ul>
                <li><b>Species:</b> ${characterArray.results[i].species}</li>
                <li><b>Status:</b> ${characterArray.results[i].status}</li>
                <li><b>Gender:</b> ${characterArray.results[i].gender}</li>`;

                
                    if(!characterArray.results[i].type == ""){
                    
                    character += `<li><b>Type:</b>${characterArray.results[i].type}</li>`

                    }

                    character += `
                    
                    <li><b>Type:</b>${characterArray.results[i].status}</li>
                    `;
                    
                    
                   
    characterUl.innerHTML += character; 
}
    
}