import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() emiterListaTarefa = new EventEmitter();

  adicionaLista: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  pegaItemAdicionado(){
    this.adicionaLista = this.adicionaLista.trim();
    if(this.adicionaLista){
      this.emiterListaTarefa.emit(this.adicionaLista);
      this.adicionaLista = "";
    }
  }

}
