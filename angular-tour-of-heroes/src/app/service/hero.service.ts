import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {Hero} from './../hero';
import{HEROES} from './../mock-heroes';
import{MessageService} from './message.service';

@Injectable({
    providedIn:'root',
})
export class HeroService{

    constructor(private messageService: MessageService){}

    getHeroes():Observable<Hero[]>{

        //The purpose of this is to send a message after getting the heroes
        this.messageService.add('HeroService:fectched heroes');
        return of(HEROES);
    }


}