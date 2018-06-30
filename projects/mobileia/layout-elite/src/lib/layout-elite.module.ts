import { NgModule } from '@angular/core';
import { LayoutEliteComponent } from './layout-elite.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthenticationModule } from '@mobileia/authentication';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthenticationModule
  ],
  declarations: [LayoutEliteComponent, LoginPageComponent],
  exports: [LayoutEliteComponent]
})
export class LayoutEliteModule { }
