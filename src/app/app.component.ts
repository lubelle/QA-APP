import { QuestionAnswers, Answer } from './interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Q&A App';
  questionAnswers: QuestionAnswers = {
    question: { author: 'John', content: 'The meaning of life?' },
    answers: [
      { author: 'Brown', content: `The answer is number 42.`, accepted: true},
      { author: 'Jane', content: `The answer is right infront of you.`}
    ]

  };

  deleteAnswer(answer: Answer) {
    this.questionAnswers.answers.splice(
      this.questionAnswers.answers.indexOf(answer), 1);
  }

}
