import { Component } from "@angular/core";

//you need a decorator which is @Component
@Component({
    selector:'app-server',
    //external template
    templateUrl:'./server.component.html'

    //internal template
    //template:`<app-server></app-server>`,
})
export class ServerComponent{

}