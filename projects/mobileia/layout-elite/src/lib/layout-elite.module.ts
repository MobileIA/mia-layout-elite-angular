import { NgModule } from '@angular/core';
import { LayoutEliteComponent } from './layout-elite.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthenticationModule } from '@mobileia/authentication';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    AuthenticationModule
  ],
  declarations: [LayoutEliteComponent, LoginPageComponent, TopbarComponent],
  exports: [LayoutEliteComponent, TopbarComponent]
})
export class LayoutEliteModule { }
