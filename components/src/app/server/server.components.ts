import { Component } from "@angular/core";

//you need a decorator which is @Component
@Component({
    selector:'app-server',
    //external template
    templateUrl:'./server.component.html',
    styles:[`
        .online{

            color:white;
        }

        .standard{

            font-size:24px;
        }
    
    `]



    //internal template
    //template:`<app-server></app-server>`,
})
export class ServerComponent{
    serverId:number = 10;
    serverStatus:string;

    constructor(){
        this.serverStatus= Math.random( )> 0.5 ? 'Online' : 'Offline';
    }

    getServerStatus(){

        return this.serverStatus;
    }

    getBackgroundColor(){

        return this.serverStatus === 'Online' ? 'green': 'red';
    }
}