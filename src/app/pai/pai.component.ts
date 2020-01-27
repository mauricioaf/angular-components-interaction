import { Component } from '@angular/core';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css'],
  providers: [TarefaService]
})
export class PaiComponent {

  model: string;
  taskList: string[] = [];

  constructor(private tarefaService: TarefaService) {
    tarefaService.concluido$.subscribe(task => {
      debugger;
      this.taskList.push(`${task} concluído!`);
    });
  }

  create() {
    debugger;
    this.tarefaService.criar('Limpar o quarto!');
    this.taskList.push(`Tarefa criada!`);
  }

}
