import { Component, OnChanges, OnInit } from '@angular/core';
import { Hero } from 'src/app/inrfaces/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit, OnChanges {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();

    console.log(this.selectedHero);
  }
  ngOnChanges() {
    console.log('on change');
  }
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };
  // hero = 'Windstorm';
  // heroes = HEROES;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   console.log(this.selectedHero);
  // }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  // this.heroes = this.heroService.getHeroes();
}
