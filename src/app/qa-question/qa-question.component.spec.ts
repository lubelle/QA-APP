import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaQuestionComponent } from './qa-question.component';

describe('QaQuestionComponent', () => {
  let component: QaQuestionComponent;
  let fixture: ComponentFixture<QaQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
