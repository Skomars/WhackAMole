import { NgModule } from '@angular/core';

import { GameComponent } from './game/game.component';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { HighscoreComponent } from './highscore/highscore.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: '', component: SplashComponent },
  { path: 'about', component: AboutComponent },
  { path: 'highscore', component: HighscoreComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
