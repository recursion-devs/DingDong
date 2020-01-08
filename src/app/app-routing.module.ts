// Anguler Stuff
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Own Module
import { HomeComponent } from '@core/home/home.component';
import { LevelsComponent } from '@core/levels/levels.component';
import { LevelContentComponent } from '@core/level-content/level-content.component';

const routes: Routes = [
    { path: 'level-content', component: LevelContentComponent },
    { path: 'levels', component: LevelsComponent },
    { path: 'home', component: HomeComponent },
    { path: '**' , redirectTo: 'home'} // <-- DEFAULT FALLBACK
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}