import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/pjs.interface";

@Injectable()
export class PjService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          edad: 16
        },
        {
          nombre: 'Ellie',
          edad: 13
        },
        {
          nombre: "BoJack Horseman",
          edad: 57
        }
      ]; 

      get personajes(): Personaje[] {
          return [...this._personajes];
      }
    
    constructor() {  }

    agregarPersonaje (personaje: Personaje) {
        this._personajes.push(personaje);
    }

}