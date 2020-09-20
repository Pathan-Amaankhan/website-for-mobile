import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerNotAvailablePageComponent } from './spinner-not-available-page.component';

describe('SpinnerNotAvailablePageComponent', () => {
  let component: SpinnerNotAvailablePageComponent;
  let fixture: ComponentFixture<SpinnerNotAvailablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerNotAvailablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerNotAvailablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
