import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../home/model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  listaTarefa: Array<TaskList> = [];
  constructor() { }

  ngDoCheck(): void {
    this.listaTarefa.sort((first, last) => Number(first.checked) - Number(last.checked));
  }

  ngOnInit(): void {
  }

  deleteItemTarefa(e: number){
    this.listaTarefa.splice(e, 1);
  }

  deleteTudoLista(){
    const alerta = window.confirm("Você deseja mesmo Deletar Tudo?")

    if(alerta){
      this.listaTarefa = [];
    }
  }
  receberEmiter(event: string){
    this.listaTarefa.push({task: event, checked: false});
  }

}
