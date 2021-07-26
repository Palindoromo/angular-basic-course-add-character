import { Component } from '@angular/core';

import { Personaje } from '../interfaces/pjs.interface';

import { PjService } from '../services/pj.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Sherlock Holmes',
    edad: 42
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje( argumento: Personaje) {
  //   // debugger;
  //   this.personajes.push(argumento);
  // }

  // constructor(private dbzService: DbzService) { 
  //   // this.personajes = this.dbzService.personajes;
  //  }

}
