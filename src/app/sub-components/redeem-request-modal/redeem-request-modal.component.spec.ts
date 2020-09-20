import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemRequestModalComponent } from './redeem-request-modal.component';

describe('RedeemRequestModalComponent', () => {
  let component: RedeemRequestModalComponent;
  let fixture: ComponentFixture<RedeemRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
