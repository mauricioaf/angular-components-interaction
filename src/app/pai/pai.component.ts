import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements AfterViewInit {

  constructor() { }

  @ViewChild(FilhoComponent, {static: false})
  private filho: FilhoComponent;

  public ordenar() {
    this.filho.estudar();
  }

  ngAfterViewInit() {}

}
