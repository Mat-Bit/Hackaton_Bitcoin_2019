import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { PoModule } from '@portinari/portinari-ui';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TelaEmployerComponent } from './tela-employer/tela-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    TelaEmployerComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
