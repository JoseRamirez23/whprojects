import { Component, OnInit } from '@angular/core';

interface Person{

  firstName:string;
  lastName:string;

  sayHi():string;
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
     const customer:Person = {


      firstName:"Jose",
      lastName:"Ramirez",
       sayHi: () => {
        return "Hi";

      }
     }

      console.log(customer.sayHi);
      const employee : Person = {

        firstName:"h",
        lastName:"g",

        sayHi: () => {
          return "Hi";
  
        }
      }
  }
}

