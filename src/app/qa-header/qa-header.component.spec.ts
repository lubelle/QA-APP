import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaHeaderComponent } from './qa-header.component';

describe('QaHeaderComponent', () => {
  let component: QaHeaderComponent;
  let fixture: ComponentFixture<QaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
