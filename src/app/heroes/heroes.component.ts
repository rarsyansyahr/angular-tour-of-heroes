import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero:Hero = {
    id: 1,
    name: "Gatotkaca"
  };

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  /*onSelect(hero: Hero): void {
    this.messageService.add(`HeroService: Selected hero id = ${hero.id}`);
    this.selectedHero = hero;
  }*/

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
