import {Component, OnInit, Input} from '@angular/core';
import {Answer, QuestionAnswers} from './interfaces';
import {QaService} from './qa.service';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'child',
  template: `{{arr}}
  <div *ngFor="let item of arr">{{item}}</div>`
})
export class ChildComponent {
  @Input() arr;
}

@Component({
  selector: 'app-root',
  // providers:  [ ... ], <-- moved to app.module.ts;
  //                      see HttpClientModule in "imports", and
  //                      QandAService in "providers" there
  // directives: [ ... ], <-- moved to app.module.ts; see "declarations"
  template: `
    <ua-nav [title]="appTitle"></ua-nav>
    <ng-template [ngIf]="questionAndAnswers">
      <div class="card">
        <ua-question [question]="questionAndAnswers.question"></ua-question>
        <ua-answer-header [answerCount]="answerCount"></ua-answer-header>
        <ua-answer *ngFor="let ans of questionAndAnswers.answers; let i=index"
            [answer]="ans" [index]="i+1" (deleteEvent)="deleteAnswer($event)">
        </ua-answer>
      </div>
    </ng-template>
    <div class="error">{{errorMsg}}</div>
    <child [arr]="myArray"></child>
    <br><button (click) = "changeArrayItem()">Change Array Item</button>
    <button (click)="changeArray()">change array</button>`,  // TODO create ErrorBarComponent
    
  styles: ['.error { margin: 10px; font-size: 14px }'],
})
export class AppComponent implements OnInit {
  myArray = [1, 2, 3];
   appTitle = 'Udemy Course - Q&A App';
   errorMsg: string;
   questionAndAnswers: QuestionAnswers;
   constructor(private _qaService: QaService) {
      console.clear();
   }
   ngOnInit() {
      this._qaService.getQuestionAnswers()
          .subscribe(
            questionAndAnswers => this.questionAndAnswers = questionAndAnswers,
            err                => this.errorMsg           = err,
          );
   }
   get answerCount(): number {
      if (!this.hasOwnProperty('questionAndAnswers')) { return 0; }
      return this.questionAndAnswers.answers.length;
   }
   deleteAnswer(answer: Answer) {
      this.questionAndAnswers.answers.splice(
         this.questionAndAnswers.answers.indexOf(answer), 1);
   }
   changeArrayItem() {
     this.myArray[0]++;
   }
   changeArray() {
     this.myArray = [10, 20, 30];
   }
}
