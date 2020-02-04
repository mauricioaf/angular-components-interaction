import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  valor = 1;

  constructor() { }

  aumentarMesada() {
    this.valor++;
  }

  ngOnInit() {}

}
