import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor(

  ) { }

  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Gatotkaca' },
      { id: 12, name: 'Wiro Sableng' },
      { id: 13, name: 'Gundala' },
      { id: 14, name: 'Arjuna' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ]

    return { heroes };
  }

  genId(heroes: Hero[]) {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
