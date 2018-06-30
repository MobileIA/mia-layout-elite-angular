import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutEliteModule } from 'projects/mobileia/layout-elite/src/public_api';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    LayoutEliteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
