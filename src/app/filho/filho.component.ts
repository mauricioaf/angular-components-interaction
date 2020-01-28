import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnDestroy {

  subscription: Subscription;
  pendencias = [];


  constructor(private tarefaService: TarefaService) {
    this.subscription = tarefaService.pendente$.subscribe(
      tarefa => {
        this.pendencias.push(tarefa);
      });
  }

  concluirTarefa() {
    const tarefa = this.pendencias.shift();
    this.tarefaService.concluir(tarefa);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
