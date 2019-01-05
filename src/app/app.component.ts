import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import {Answer, QuestionAnswers} from './interfaces';
import {QaService} from './qa.service';

@Component({
  selector: 'child',
  template: `{{arr}}<br>
  <p>child: <span *ngFor="let item of arr">{{item}} </span><br>`
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked {
  @Input() arr;
  constructor()             { console.log('   child-constructor') }
  ngOnChanges()           { console.log(' 1 child-onChanges') }
  ngOnInit()              { console.log('   child-onInit') }
  ngDoCheck()             { console.log(' 2 child-doCheck') }
  ngAfterContentInit()    { console.log('   child-afterContentInit') }
  ngAfterContentChecked() { console.log(' 3 child-afterContentChecked') }
  ngAfterViewInit()       { console.log('   child-afterViewInit') }
  ngAfterViewChecked()    { console.log(' 4 child-afterViewChecked') }
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
    <button (click)="changeArray()">change array</button><br><br>
    parent: <span *ngFor = "let item of myArray">{{item}} </span><br><br>
    <button (click)="myArray[0] = myArray[0] + 1">change array item</button>
    <button (click)="assignNewArray()">assign new array</button>`,  // TODO create ErrorBarComponent
    
  styles: ['.error { margin: 10px; font-size: 14px }'],
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked {
  myArray = [1, 2, 3];
   appTitle = 'Udemy Course - Q&A App';
   errorMsg: string;
   questionAndAnswers: QuestionAnswers;
   constructor(private _qaService: QaService) {
      console.clear();
      console.log('parent-constructor');
   }
   ngOnInit() {
      this._qaService.getQuestionAnswers()
          .subscribe(
            questionAndAnswers => this.questionAndAnswers = questionAndAnswers,
            err                => this.errorMsg           = err,
          );
      console.log('parent-onInit');
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
   ngOnChanges() { console.log('1. parent-onChanges'); }
   ngDoCheck() { console.log('parent-doCheck'); }
   ngAfterContentInit() { console.log('parent-afterContentInit'); }
   ngAfterContentChecked() { console.log('parent- afterContentChecked'); }
   ngAfterViewInit() { console.log('parent-afterViewInit'); }
   ngAfterViewChecked() { console.log('parent-afterViewChecked'); }
   assignNewArray() {
    this.myArray = this.myArray[0] === 1 ? [10, 20, 30] : [1, 2, 3];
  }
}
