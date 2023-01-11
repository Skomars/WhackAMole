import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameComponent } from './game/game.component';
import { HighscoreComponent } from './highscore/highscore.component';
import { AboutComponent } from './about/about.component';
import { SplashComponent } from './splash/splash.component';
import { GameLogicService } from './game/gamelogic.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HighscoreComponent,
    AboutComponent,
    GameComponent,
    SplashComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [GameLogicService],
  bootstrap: [AppComponent],
})
export class AppModule {}
