import { Component } from '@angular/core';

@Component({

  //this is meta data, everything in component
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] //external style


  //inline styles
  styles:[`
  h3{

    color:gren
  }
  `]
})
export class AppComponent {
  title = 'app';
}

