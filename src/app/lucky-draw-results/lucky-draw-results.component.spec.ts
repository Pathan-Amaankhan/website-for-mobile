import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyDrawResultsComponent } from './lucky-draw-results.component';

describe('LuckyDrawResultsComponent', () => {
  let component: LuckyDrawResultsComponent;
  let fixture: ComponentFixture<LuckyDrawResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyDrawResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyDrawResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
