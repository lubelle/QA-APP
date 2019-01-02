import { QaAnswerComponent } from './qa-answer/qa-answer.component';
import { QaHeaderComponent } from './qa-header/qa-header.component';
import { QuestionAnswers, Answer } from './interfaces';
import { Component } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  template: `<app-qa-header [myTitle]="appTitle"></app-qa-header>
             <app-qa-question [question]="questionAnswers.question"></app-qa-question>
             <app-qa-answer *ngFor="let ans of questionAnswers.answers; let i = index"
             [answer]="ans" [index]="i+1" (deleteEvent)="deleteAnswer($event)"></app-qa-answer>
             `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Q&A App';
  questionAnswers: QuestionAnswers = {
    question: { author: 'John', content: 'The meaning of life?' },
    answers: [
      { author: 'Brown', content: `The answer is number 42.`, accepted: true},
      { author: 'Jane', content: `The answer is right infront of you.`},
      { author: 'Ben', content: `No clue`}
    ]

  };

  deleteAnswer(answer: Answer) {
    this.questionAnswers.answers.splice(
      this.questionAnswers.answers.indexOf(answer), 1);
  }

}
