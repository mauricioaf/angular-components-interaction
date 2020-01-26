import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  constructor() { }

  @Output() pedido = new EventEmitter();

  ngOnInit() {
    this.pedido.emit('R$100,00');
  }

}
