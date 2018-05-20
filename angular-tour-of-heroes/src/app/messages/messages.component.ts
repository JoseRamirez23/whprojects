import { Component, OnInit } from '@angular/Core';
import { MessageService } from '../service/message.service';

@Component({

    selector: 'app-messages',
    template: './messages.component.html',
    styleUrls : ['./messages.component.css']

})

export class MessagesComponent implements OnInit{


    constructor(public messageService: MessageService){

    }

    ngOnInit(){

    }

}