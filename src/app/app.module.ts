import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QaQuestionComponent } from './qa-question/qa-question.component';
import { QaAnswerComponent } from './qa-answer/qa-answer.component';
import { QaHeaderComponent, MyAttrDirective, MyAttrDirective2,  } from './qa-header/qa-header.component';

@NgModule({
  declarations: [
    AppComponent,
    QaQuestionComponent,
    QaAnswerComponent,
    QaHeaderComponent,
    MyAttrDirective,
    MyAttrDirective2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
