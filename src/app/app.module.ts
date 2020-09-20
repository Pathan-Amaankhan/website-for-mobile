import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { GamesListComponent } from './games-list/games-list.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { HomeBoxesComponent } from './sub-components/home-boxes/home-boxes.component';
import { AdvertisementComponent } from './sub-components/advertisement/advertisement.component';
import { CurrentBalanceComponent } from './sub-components/current-balance/current-balance.component';
import { RedeemPageComponent } from './redeem-page/redeem-page.component';
import { RedeemRequestModalComponent } from './sub-components/redeem-request-modal/redeem-request-modal.component';
import { ReferAndEarnPageComponent } from './refer-and-earn-page/refer-and-earn-page.component';
import { SpinnerPageComponent } from './spinner-page/spinner-page.component';
import { SpinnerNotAvailablePageComponent } from './spinner-not-available-page/spinner-not-available-page.component';
import { LuckyDrawDashboardComponent } from './lucky-draw-dashboard/lucky-draw-dashboard.component';
import { LuckyDrawResultsComponent } from './lucky-draw-results/lucky-draw-results.component';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './games-list/game-core-2048/core.module';
import { GameOutletComponent } from './sub-components/game-outlet/game-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInPageComponent,
    GamesListComponent,
    ProfilePageComponent,
    WalletPageComponent,
    HomeBoxesComponent,
    AdvertisementComponent,
    CurrentBalanceComponent,
    RedeemPageComponent,
    RedeemRequestModalComponent,
    ReferAndEarnPageComponent,
    SpinnerPageComponent,
    SpinnerNotAvailablePageComponent,
    LuckyDrawDashboardComponent,
    LuckyDrawResultsComponent,
    GameOutletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
