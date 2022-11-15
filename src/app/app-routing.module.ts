import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiceComponent } from './dice/dice.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { PointsComponent } from './points/points.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dice', component: DiceComponent},
  {path: 'game', component: GameComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'points', component: PointsComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
