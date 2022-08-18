import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../home/model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  listaTarefa: Array<TaskList> = JSON.parse(localStorage.getItem("lista") || '[]');
  constructor() { }

  ngDoCheck(): void {
    this.setarLocalStorage()
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

  acaoListaTarefa(e: string, index: number){
    if(!e.length){
      const alerta = window.confirm("Você deseja apagar essa Tarefa?")
      
      if(alerta){
        this.deleteItemTarefa(index);
      }

    }
  }

  setarLocalStorage(){
    if(this.listaTarefa){
      this.listaTarefa.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("lista", JSON.stringify(this.listaTarefa))
    }
  }

}
