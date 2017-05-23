import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() okText;

  @Input() cancelText;

  @Output() valueEmitted;

  constructor() { 
    this.okText = 'OK';
    this.cancelText='CANCEL';
  }

  emitValue(value) {
    this.valueEmitted.emit(value);
  }

  ngOnInit() {
  }

}
