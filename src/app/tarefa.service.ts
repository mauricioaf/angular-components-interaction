import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  // Observable string sources
  private pendenteSource = new Subject<string>();
  private concluidoSource = new Subject<string>();

  // Observable string streams
  pendente$ = this.pendenteSource.asObservable();
  concluido$ = this.concluidoSource.asObservable();

  // Service message commands
  criar(tarefa: string) {
    this.pendenteSource.next(tarefa);
  }
  concluir(tarefa: string) {
    this.concluidoSource.next(tarefa);
  }
}
