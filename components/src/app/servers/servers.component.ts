import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',//this is an element selector
  selector:'[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean=false;
  serverCreationStatus:string='Now server was created';
  serverName:string;

  serverCreated:boolean=false;
  servers = ['testserver','testserver2'];
  constructor() {

    setTimeout(() => {
      
      
      this.allowNewServer = true;
    })
    
   }
    
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus='New Server' + this.serverName;
    this.servers.push(this.serverName);
  }

  //this is connected to the $event in the html file
//you can change it to any to Event because you know it's an event
    onUpdateServerName(event:Event ){
      console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

    }

}
