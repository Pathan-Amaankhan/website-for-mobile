import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-components-current-balance',
  templateUrl: './current-balance.component.html',
  styleUrls: ['./current-balance.component.css']
})
export class CurrentBalanceComponent implements OnInit {
  @Input('amount') amount: string;
  mainAmt: string;
  subAmt: string;
  constructor() { }

  ngOnInit(): void {
    this.mainAmt = this.amount.slice(0, this.amount.indexOf('.'));
    this.subAmt = this.amount.slice(this.amount.indexOf('.'));
  }

}
