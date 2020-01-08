// Angular Stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Own Module
import { SharedModule } from '@shared/shared.module';

// Own Component - core
import { View1Component } from './view1/view1.component';
import { HomeComponent } from './home/home.component';
import { LevelsComponent } from './levels/levels.component';
import { LevelContentComponent } from './level-content/level-content.component';

@NgModule({
  imports: [
    // Angular Stuff
    CommonModule,

    // Own Module
    SharedModule
  ],
  declarations: [
    // Own Component - core
    View1Component,
    HomeComponent,
    LevelsComponent,
    LevelContentComponent,
  ]
})
export class CoreModule { }
