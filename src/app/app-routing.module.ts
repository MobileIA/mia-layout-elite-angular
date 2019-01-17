import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from 'projects/mobileia/layout-elite/src/lib/login-page/login-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleComponent } from './example/example.component';
import { AuthGuard } from '@mobileia/authentication';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      'success_route': 'index', /*, 'verify_role': true, 'with_role': 1*/
      'image_background': 'assets/images/background/login-register.jpg',
      'image_logo': 'assets/images/logo/logo-text.png',
      'title_box': 'Promotores',
      'button_color': 'btn-success'
    }
  },
  {
    path: 'create',
    component: ExampleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: LoginPageComponent
  },
  {
    path: 'index',
    component: ExampleComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
