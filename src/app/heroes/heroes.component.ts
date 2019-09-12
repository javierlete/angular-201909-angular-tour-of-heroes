import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    console.log('getHeroes');
    this.heroService.getHeroes().subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    });
  }

  // private heroService: HeroService;

  // constructor() {
  //   this.heroService = new HeroService();
  //   this.heroes = this.heroService.getHeroes();
  // }

  ngOnInit() {
    console.log('ngOnInit');
    this.getHeroes();
  }

}
