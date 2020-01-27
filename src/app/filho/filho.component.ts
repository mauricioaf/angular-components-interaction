import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnDestroy {

  subscription: Subscription;
  task = 'Sem tarefas criadas!';
  created: boolean;
  confirmed: boolean;

  constructor(private tarefaService: TarefaService) {
    this.subscription = tarefaService.pendente$.subscribe(
      task => {
        debugger;
        this.task = task;
        this.created = true;
        this.confirmed = false;
      });
  }

  confirm() {
    debugger;
    this.confirmed = true;
    this.tarefaService.concluir(this.task);
  }


  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
