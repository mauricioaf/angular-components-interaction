import { Component } from '@angular/core';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css'],
  providers: [TarefaService]
})
export class PaiComponent {

  tarefaList = ['Limpar o quarto', 'Estudar Angular', 'Hora de brincar'];
  pendencias = [];

  constructor(private tarefaService: TarefaService) {
    tarefaService.concluido$.subscribe(tarefa => {
      this.pendencias = this.pendencias.filter(t => t !== tarefa);
      this.tarefaList.push(tarefa);
    });
  }

  criarTarefa() {
    const tarefa = this.tarefaList.shift();
    this.pendencias.push(tarefa);
    this.tarefaService.criar(tarefa);
  }

}
