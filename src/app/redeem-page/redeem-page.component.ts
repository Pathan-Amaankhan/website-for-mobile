import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redeem-page',
  templateUrl: './redeem-page.component.html',
  styleUrls: ['./redeem-page.component.css']
})
export class RedeemPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeThePanel(offElement) {
    offElement.target.innerText = (offElement.target.innerText === 'Paytm') ? 'Poornima' : 'Paytm';
    document.getElementsByClassName('on-side')[0].innerHTML = (offElement.target.innerText === 'Paytm') ? 'Poornima' : 'Paytm';
  }

}
