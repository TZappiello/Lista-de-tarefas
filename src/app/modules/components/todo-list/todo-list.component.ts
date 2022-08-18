import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../home/model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  listaTarefa: Array<TaskList> = [
    { task: 'Minha Tarefa', checked: true},
    { task: 'Minha Tarefa2', checked: false}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
