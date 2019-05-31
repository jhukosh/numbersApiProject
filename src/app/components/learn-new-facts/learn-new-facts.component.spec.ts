import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnNewFactsComponent } from './learn-new-facts.component';

describe('LearnNewFactsComponent', () => {
  let component: LearnNewFactsComponent;
  let fixture: ComponentFixture<LearnNewFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnNewFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnNewFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
