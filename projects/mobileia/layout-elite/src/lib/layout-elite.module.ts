import { NgModule } from '@angular/core';
import { LayoutEliteComponent } from './layout-elite.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [
  ],
  declarations: [LayoutEliteComponent, LoginPageComponent],
  exports: [LayoutEliteComponent]
})
export class LayoutEliteModule { }
