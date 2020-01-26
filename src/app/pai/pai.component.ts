import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements AfterViewInit {

  model: string;

  constructor() { }

  receberPedido(valor) {
    this.model = valor;
  }

  ngOnInit() {}

  ngAfterViewInit() {}

}
