import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  constructor() { }

  model: string;

  @Input()
  set valor(valor: string) {
    console.log('Aqui e ' + valor);
    this.model = valor;
  }

  ngOnInit() {
  }

}
