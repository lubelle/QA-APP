import { Question } from './../interfaces';
import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-qa-question',
  templateUrl: './qa-question.component.html',
  styleUrls: ['./qa-question.component.css']
})
export class QaQuestionComponent {
  @Input() question: Question;
  @ViewChild('input1') input1: ElementRef;
  editing = false;
  savedContent: string;

  constructor(private _renderer: Renderer) { }
  edit() {
    this.editing = true;
    this.savedContent = this.question.content;
    setTimeout( () => {
      this._renderer.invokeElementMethod(this.input1.nativeElement, 'focus', []);
    });
  }
  cancel() {
    this.editing = false;
    this.question.content = this.savedContent;
  }
  save() {
    this.editing = false;

  }

}
