import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  LISTA_TAREA_KEY ="listaTareas"

  constructor() { 
  }


  saveListaTareas(listaTareas:Tarea[]): void{
    localStorage.setItem(this.LISTA_TAREA_KEY, JSON.stringify(listaTareas))
  }
  
  getListaTareas(): Tarea[]{
    const lista = JSON.parse(localStorage.getItem(this.LISTA_TAREA_KEY)!)
    return lista ? lista : [];
  }
}
