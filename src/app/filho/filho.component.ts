import { Component, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnChanges {

  constructor() { }

  @Input() valor: number;
  changeLog: string[] = [];

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`${propName} inicial [${to}]`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} alterado de [${from}] para [${to}]`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

}
