import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent, ChildComponent }            from './app.component';
import { UaNavComponent }          from './ua-nav/ua-nav.component';
import { UaAnswerEditComponent }   from './ua-answer-edit/ua-answer-edit.component';
import { UaAnswerHeaderComponent } from './ua-answer-header/ua-answer-header.component';
import { UaAnswerComponent }       from './ua-answer/ua-answer.component';
import { UaQuestionComponent }     from './ua-question/ua-question.component';
import { QaService }            from './qa.service';
import { RememberService }         from './remember.service';

@NgModule({
  declarations: [
    AppComponent,
    UaNavComponent,
    UaAnswerEditComponent,
    UaAnswerHeaderComponent,
    UaAnswerComponent,
    UaQuestionComponent,
    ChildComponent
  ],
  imports: [ BrowserModule, FormsModule, HttpClientModule ],
  providers: [ QaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }