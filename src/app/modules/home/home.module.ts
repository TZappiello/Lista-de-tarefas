import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { HeaderComponent } from '../components/header/header.component';
import { TodoButtonDeleteAllComponent } from '../components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from '../components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

//Page
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
