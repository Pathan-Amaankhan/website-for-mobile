import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyDrawDashboardComponent } from './lucky-draw-dashboard.component';

describe('LuckyDrawDashboardComponent', () => {
  let component: LuckyDrawDashboardComponent;
  let fixture: ComponentFixture<LuckyDrawDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyDrawDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyDrawDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
