import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-components-redeem-request-modal',
  templateUrl: './redeem-request-modal.component.html',
  styleUrls: ['./redeem-request-modal.component.css']
})
export class RedeemRequestModalComponent implements OnInit {
  @Input('image-src') imagePath: string;
  @Input('success-text') successText: string;
  @Input('ticket-number') ticketNo: string;
  constructor() { }

  ngOnInit(): void {
  }

}
