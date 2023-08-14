import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  listTareas: Tarea[] = [];
  description: string = "";
  date: Date = new Date();
  isCompleted: Boolean = true;

  constructor(private tareaService:TareaService) { }

  ngOnInit(): void {
    this.listTareas= this.tareaService.getListaTareas();
  }

  agregar(){
    if(this.description.trim().length && this.date){
      let newTarea: Tarea = {
        id: Date.now(),
        description: this.description,
        date: this.date,
        isCompleted: this.isCompleted
      }
      this.listTareas.push(newTarea);
      this.save();
    }  
  }

  eliminarTarea(index:number){
    this.listTareas.splice(index, 1)
    this.save();
  }

  cambiarCompletado(index:number){
    const tarea = this.listTareas[index]
    tarea.isCompleted = !tarea.isCompleted;
    this.save();
  }

  save(){
    this.tareaService.saveListaTareas(this.listTareas)
  }

}
