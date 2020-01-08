// Anguler Stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Own Module
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Router
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Anguler Stuff
    BrowserModule,

    // Own Module
    CoreModule,
    SharedModule,

    // Router
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
