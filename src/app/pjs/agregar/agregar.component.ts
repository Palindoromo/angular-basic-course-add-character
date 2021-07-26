import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/pjs.interface';

import { PjService } from '../services/pj.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    edad: 0
  }

  constructor (private pjService: PjService) {}

//  @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }
    
    // this.nuevoPersonaje.emit(this.nuevo);
    this.pjService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      edad: 0
    }

  }

  // agregar(event: any) {
  //   event.preventDefault();
  //   console.log(event);
  // }

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }
}
