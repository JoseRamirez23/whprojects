//items, photos, itemsArray it know it has this things but does not know what's in it
items 



var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');

var selectedArray=[];
var itemArray = [
    {

        img: "http://unsplash.it/256/256?image=100",
        alt:"Unsplash", 
        title:"Bleach",
        cost:150,
        desc:"Beatiful Landscape"
    },

    {

        img: "http://unsplash.it/256/256?image=111",
        alt:"Here it i", 
        title:"Old fashion Car",
        cost:300,
        desc:"Awesome Old Car"
    },

    {

        img: "http://unsplash.it/256/256?image=101",
        alt:"Here it is", 
        title:"Prison",
        cost:10,
        desc:"Unbreakable prison"
    },

    {

        img: "http://unsplash.it/256/256?image=11",
        alt:"Here it is", 
        title:"Mystery Land of Wonders",
        cost:2000000,
        desc:"sell for cheap"
    }

];

function displayItems(arr){

    for(var i= 0; i < arr.length; i++){

        console.log(arr[i].alt);
        var item =`
        <li data-sku="${i}">
                <input type="checkbox">
                <img src="${arr[i].img}" alt=${arr[i].alt}>
                <h3>${arr[i].title}</h3>
                <p>${arr[i].cost}</p>
                <p>${arr[i].desc} </p>
            </li>
`;
        items.innerHTML += item;

    }

    
}

displayItems(itemArray);


console.log(items.children);

function addListener(arr, objArr){

    for(var i = 0; i < arr.length; i++){

        //console.log(arr[i]);
        arr[i].addEventListener('click',function(evt){

               
                this.classList.toggle('selected');
                //this.firstElementChild.checked = true;

                //Ternaray Operator this works kinda like an if statement but it works with only a few items
                (this.firstElementChild.checked ) ? 
                this.firstElementChild.checked = false :
                this.firstElementChild.checked = true ;


                selectedArray.push(objArr.slice(this.dataset.sku,parseInt(this.dataset.sku)+1[0]))
                console.log(obArr.slice(this.dataset.sku, parseInt(this.dataset.sku)+1)[0]);
                

               // console.log(this.firstElementChild.checked);
               //console.log(this.dataset.sku);
               //selectedArray.push(this);

               //console.log(selectedArray);
        });
    }

    
}

addListener(items.children, itemArray);