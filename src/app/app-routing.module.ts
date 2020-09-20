import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SignInPageComponent} from './sign-in-page/sign-in-page.component';
import {GamesListComponent} from './games-list/games-list.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {WalletPageComponent} from './wallet-page/wallet-page.component';
import {RedeemPageComponent} from './redeem-page/redeem-page.component';
import {ReferAndEarnPageComponent} from './refer-and-earn-page/refer-and-earn-page.component';
import {SpinnerPageComponent} from './spinner-page/spinner-page.component';
import {SpinnerNotAvailablePageComponent} from './spinner-not-available-page/spinner-not-available-page.component';
import {LuckyDrawDashboardComponent} from './lucky-draw-dashboard/lucky-draw-dashboard.component';
import {LuckyDrawResultsComponent} from './lucky-draw-results/lucky-draw-results.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'sign-in', component: SignInPageComponent},
  { path: 'games-list', component: GamesListComponent },
  { path: 'my-profile', component: ProfilePageComponent },
  { path: 'wallet', component: WalletPageComponent },
  { path: 'redeem', component: RedeemPageComponent },
  { path: 'share', component: ReferAndEarnPageComponent },
  { path: 'spinner', component: SpinnerPageComponent },
  { path: 'spinner-not-available', component: SpinnerNotAvailablePageComponent },
  { path: 'lucky-draw-dashboard', component: LuckyDrawDashboardComponent },
  { path: 'lucky-draw-results', component: LuckyDrawResultsComponent },

  /* For other paths */
  {path: '**', redirectTo: '/sign-in'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
