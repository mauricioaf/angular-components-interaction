import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  constructor() { }

  model: string;

  public estudar() {
    this.model = 'Angular';
  }

  ngOnInit() {}

}
