import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-page',
  templateUrl: './spinner-page.component.html',
  styleUrls: ['./spinner-page.component.css']
})
export class SpinnerPageComponent implements OnInit {
  prisePoints: number;
  btnText = 'Spin Now';
  private randomNumber: number;
  private listOfPoints = [10, 1, 5, 9, 7, 4, 2, 8, 6, 3];

  constructor() { }

  ngOnInit(): void {
  }

  spinTheWheel(spinnerWheel: HTMLDivElement) {
    if (this.btnText === 'Spin Now') {
      this.randomNumber = Math.floor(Math.random() * 10);
      this.randomNumber *= 36;
      spinnerWheel.className = 'container-spin';
      setTimeout(() => {
        try{
          document.getElementsByClassName('container-spin')[0].className = '';
          spinnerWheel.className = 'rotate' + this.randomNumber;
          setTimeout(() => this.chg(), 1000);
        } catch (e) {
          console.log(e);
        }
      }, 510);
    }
  }

  chg() {
    document.getElementById('spinner-tick').style.width = '9vmin';
    document.getElementById('spinner-tick').style.height = '10.5vmin';
    document.getElementById('spinner-wheel').style.width = '30vmin';
    document.getElementById('spinner-wheel').style.height = '30vmin';
    document.getElementsByClassName('centered-thing')[0].className = 'centered-thing d1 top40';
    document.getElementsByClassName('centered-thing')[1].className = 'centered-thing d1 top40';
    this.prisePoints = this.listOfPoints[this.randomNumber / 36];
    setTimeout(() => {
      document.getElementsByClassName('title-text')[0].innerHTML = 'Congratulations !!!';
      document.getElementsByClassName('sub-title-text')[0].innerHTML = 'Click on claim below to add these coins to your wallet.';
      this.btnText = 'Claim Coins';
      }, 500);
    for (const i of [1, 2]) {
      // @ts-ignore
      $('.title-text').transition('horizontal flip');
      // @ts-ignore
      $('.sub-title-text').transition('horizontal flip');
      // @ts-ignore
      $('.button-with-text').transition('vertical flip');
    }
  }

}
