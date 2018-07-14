import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutEliteModule } from 'projects/mobileia/layout-elite/src/public_api';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExampleComponent } from './example/example.component';
import { AuthenticationModule } from '../../node_modules/@mobileia/authentication';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    LayoutEliteModule,
    AuthenticationModule.forRoot({ apiKey: "16"}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
