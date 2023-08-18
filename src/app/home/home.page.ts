import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref],
})

export class HomePage {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  heroes =  ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor() {}
}