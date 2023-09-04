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
  
  public alertButtons = ['Recuperar'] ;
  
  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
    {
      placeholder: 'Contraseña (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      placeholder: 'Repetir Contraseña (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
      
      
    },
    

  ];
  constructor() {}
}