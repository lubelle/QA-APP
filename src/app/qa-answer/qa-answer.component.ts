import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Answer } from './../interfaces';

@Component({
  selector: 'app-qa-answer',
  templateUrl: './qa-answer.component.html',
  styleUrls: ['./qa-answer.component.css']
})
export class QaAnswerComponent {
  @Input() answer: Answer;
  @Input() index: number;
  @Output() deleteEvent = new EventEmitter<Answer>();
  constructor() { }

  requestDelete() {
    console.log('AnswerComponent requestDelete()');
    this.deleteEvent.emit(this.answer);
  }

}
