import { Injectable } from '@angular/core';
import { Hero } from '../inrfaces/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   return heroes;
  // }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}