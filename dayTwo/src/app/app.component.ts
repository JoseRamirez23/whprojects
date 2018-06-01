import { Component,OnInit } from '@angular/core';

class Greeting{

  //this is a type string
  message:string;

  //it takes the 
  constructor(message:string){
    this.message = message;

  }

  


  //this is a function
  greet(){

    //you are return the message
    return "MESSAGE," + this.message;
  }
}

class Animal{

  name:string;

  constructor(animalName:string){

    this.name = animalName;

  }

  move(distance: number = 0){
    console.log(`${this.name} moved ${distance}m.`)
  }
}

//this class Dog will extend from class Animal
class Dog extends Animal{

  constructor(name:string){
    //super mean its base class constructor, super will get from Animal class
    super(name);
  }

  //this is a method
  bark(){

    console.log('woof');
  }




  //you can use another move in the dog class
  //you can also set the standers 
  move(distanceMovedByDog:number=5){
    console.log('dog is moving...');
    super.move(distanceMovedByDog);

  }

  

}

//you can extend an extend or derived class
class Poodle extends Dog{

  constructor(name:string){
    super(name);
    
  }

  move(){
    let moving = super.move();
    console.log('poodle is walking');


  }
}

class Horse extends Animal{

  //create contructor to set Animal name
  //create move to set default distance to 45
  constructor(name:string){
  super(name);
  }

  move(distanceMovedByHorse:number=45){

    super.move(distanceMovedByHorse);
  }
}

class User{

  private name:string;

  constructor(name:string){

    this.name = name;
  }
}

class John extends User{
  constructor(){
    super('John');
  }
}

class Employee{
  private name:string;

  constructor(name:string){

    this.name = name;

  }


  //messed up in the code below
  // class Person{


  //   protected name:string;
  //   constructor(name:string){
  //     this.name = name;

  //   }
    
  // }
  

  // class Worker extends Person{

  //   private department : string;

  //   constructor(name:string, departemnt:string){

  //     super(name);
  //     this.department = department;
  //   }
  // }

  // getDetail(){
  //   return `My name is ${this.name} and I work in ${this.departemnt}.`;
  // }
  
}

interface Stuff{

  name:string;
  age:number;
  department?:string;

  foo(s:string);
  //foo?(n:number);
}

// class StuffTwo implements Stuff{

//   name:string;
//   age:number;

//   //
//   foo?(s:string){
//     this.name=s;
//   }
// }

//Modules
module Shapes{

  // so it can be used in ngOnInit you use export
  export class Rectangle{

    // height : number;
    // widht: number;

    // this with set a height and width
    constructor(public height: number, public width:number){

    }

    

  }

  //so export is used when you want to use this somewhere else, modules make it private
  export const rect1 = new Rectangle(10,4);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

//there are two form of calling a function one is OnInit
  ngOnInit(){

    //this.classCompatibilityTesting();
    //you can comment it out cause i no longer need to test the greetin
    //this.classTesting();

    //this.animalClassTesting();
    //this.extendDerivedClassTesting();
    //this.protectedTesting();
    const rect2 = Shapes;
    console.log(rect2);



    const postions:number[] = [234,342,23,44];
    const colors:string[] = ['blue','red','yellow','green'];
    console.log('random number selcted:',this.randomIntElem(postions));
    console.log('random string selcted:',this.randomStrElem(colors));

    console.log('random color selected from randomElem', this.randomElem(colors));
  }


  //classes

  classCompatibilityTesting(){

    let user = new User("Doe");
    const john = new John();

    console.log(user);
    console.log(john);

    const employee = new Employee("Mark");
    console.log(employee);
  }

  classTesting(){
    //let try to get message
    

    //its expecting a message which was called in the constructor
    //what you put in () it print as a new instinct
    const greeter = new Greeting('MESSAGE');
    
    console.log(greeter.greet());

  }

  animalClassTesting(){
    //define a const dog
    //this will give the name to the animal
    const dog = new Dog("Oreo");
    
    //this is also connected to Animal so it can move
    dog.bark();

    //to show how much meters it move you put the number in the ()
    dog.move(10);

    //you can say type Animal and it works
    const horse: Animal= new Horse("Mystery");
    horse.move();
  }

  extendDerivedClassTesting(){
    const poodle = new Poodle("Billy");
    poodle.move();

  }



  // protectedTesting(){

  //   const worker = new Worker("steve","sales");
  //   console.log(worker.getDetail);
  // }

  // const person = new Person("Patrick");

  interfaceTesting(x:Stuff){

    //const stuff = new StuffTwo();

    // stuff.foo("test");
    // console.log(stuff.name);
  }


  //Genrics

  //this is expecting an array, numbers
  randomIntElem(arr:number[]):number{

    //math.floor round down 
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  //this is also expecting an array, string
  randomStrElem(arr:string[]):string{


    //this is so you will pick an random number from an array
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  randomElem(arr: any[]):any{
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];

  }

  //end genrics
}
