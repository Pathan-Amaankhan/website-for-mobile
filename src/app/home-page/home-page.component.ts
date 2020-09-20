import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  boxProperties: string[][];

  constructor(private router: Router) {
    this.boxProperties = [
      ['assets/images/fidget-spinner.png', 'Daily Spinner', '#E67E22', '/spinner'],
      ['assets/images/dice-icon.png', 'Play Games', '#2ECC71', '/games-list'],
      ['assets/images/medal-icon.png', 'Hourly Winner', '#2196F3', '/lucky-draw-results'],
      ['assets/images/trophy-icon.png', 'Daily Winner', '#F1C40F', '/lucky-draw-results'],
      ['assets/images/gaming-icon.png', 'Lucky Draw', '#BA68C8', '/lucky-draw-dashboard'],
      ['assets/images/money-bag-icon.png', 'Lucky Jackpot', '#EF5350', '/lucky-draw-dashboard'],
      ['assets/images/wallet-icon.png', 'Wallet', '#F1C40F', '/wallet'],
      ['assets/images/decentralized-icon.svg', 'Refer & Earn', '#E67E22', '/share']
    ];
  }
  logOut() {
    localStorage.clear();
    window.location.replace('/sign-in');
  }

  ngOnInit(): void {
  }

}
