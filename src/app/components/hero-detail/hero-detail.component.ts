import { Component, OnInit, Input } from '@angular/core';

import { Hero } from 'src/app/inrfaces/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  constructor() {
    console.log('hero component working');
  }

  @Input() hero?: Hero;

  ngOnInit(): void {
    console.log(this.hero?.id);
  }
  ngOnChanges() {
    console.log('on change herodetais');
  }
}
