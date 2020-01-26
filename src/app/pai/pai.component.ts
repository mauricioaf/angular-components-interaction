import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements AfterViewInit {

  constructor() { }

  @ViewChild(FilhoComponent, {static: false})
  filho: FilhoComponent;

  ordenar() {
    this.filho.estudar();
  }

  ngOnInit() {}

  ngAfterViewInit() {}

}
