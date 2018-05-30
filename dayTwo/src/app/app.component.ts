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
    this.extendDerivedClassTesting();
    //this.protectedTesting();
  }

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

  
}
