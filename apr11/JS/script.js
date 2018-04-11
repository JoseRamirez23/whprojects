//this - context based. look to the left of the dot.

// var btns = document.querySelectorAll('button');

// for(var i = 0; i < btns.length; i++){

//     btns[i].addEventListener('click',
//     function(event){

//         console.log(event.target);
//         console.log(this);
//     });
// }

// window.addEventListener('click',
//     function(evt){
//         console.log(evt.target.nodeName);
//         if(evt.target.nodeName=='BUTTON'){
//             console.log(evt.target);
//             console.log(this);
//         }


//     });


    var cars = ['subaru','jeep','honda','jeep'];

    //in the bottom it is the type of arrays
    var types =['string',true,5,[1,2,3]];
    //in the bottom of this is a universe array
    //console.log(type[1][3]);

    // console.log(cars);
    // console.log(types);


    //objects 

    var car = {
        type:'jeep',
        model:'wrangler',
        color:'black',
        offroad:true,
        trim:['sunroof','hardtop','4 wheel drive']
    };
   // console.log(car.trim);

    var person = {

        firstname:"jose",
        lastname:"ramirez",
        age:'22',
        height:"5'11",
        hair:true,
        haircolor:"black",
        facialhair:true,
        facialhaircolor:"black",
        greeting:function(msg){
            
           // console.log(this.firstname);
            //console.log(msg + this.firstname);

        }
    }

    var type =['string',true,5,[1,2,3],person];

    person.middlename = 'Santiago';

    //console.log(person);

    person.middlename = 'Guy';
    //console.log(person);

    person.greeting("Dude");

    person.firstname = " Charlie";

    person.greeting("I'm now");
    
    //Constructor object
    // function User(first, last, age, eye){
    //     this.firstname = first;
    //     this.lastname = last;
    //     this.age = age;
    //     this.eyecolor = eye;

    // }

    // //Cap the u in User because it's an constructor object
    // var myDad = new User('Jose','Ramirez','42','Haze');
    // console.log(myDad.eyecolor);

    /**
     * 
     * username
     * email
     * password
     * 
     */
    var form = document.querySelector('form');
    console.log(form.elements.value);

    

    var users = [];
    var user = 0;
    

     function UsersAcc(name, email, password){

        this.username = name;
        this.emailaddress = email;
        this.password = password;

     }

     var submitBtn = document.querySelector('input[type="submit"]');

     submitBtn.addEventListener('click', function(evt){
        evt.preventDefault();

        
        users.push( 
            new UsersAcc(
                 form.elements[0].value,
                 form.elements[1].value,
                 form.elements[2].value
                )
            );
        
        console.log(users);

        // for(var i = 0; i < form.elements.length -1; i++){


        //     console.log(form.elements[i].value);
        // }

     });
     //console.log(users);

