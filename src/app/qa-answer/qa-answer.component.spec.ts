import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaAnswerComponent } from './qa-answer.component';

describe('QaAnswerComponent', () => {
  let component: QaAnswerComponent;
  let fixture: ComponentFixture<QaAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
