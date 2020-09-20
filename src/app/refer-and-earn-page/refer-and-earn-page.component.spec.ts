import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferAndEarnPageComponent } from './refer-and-earn-page.component';

describe('ReferAndEarnPageComponent', () => {
  let component: ReferAndEarnPageComponent;
  let fixture: ComponentFixture<ReferAndEarnPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferAndEarnPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferAndEarnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
