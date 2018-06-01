import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  //selector: 'app-servers',//this is an element selector
  selector:'[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean=false;
  constructor() { 

    setTimeout(()=>{this.allowNewServer=true;},2000);
    
  }

  ngOnInit() {
  }

}
