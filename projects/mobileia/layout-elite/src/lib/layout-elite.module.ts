import { NgModule } from '@angular/core';
import { LayoutEliteComponent } from './layout-elite.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthenticationModule } from '@mobileia/authentication';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    AuthenticationModule
  ],
  declarations: [LayoutEliteComponent, LoginPageComponent, TopbarComponent, SidebarComponent, PageHeaderComponent, LayoutComponent, TableComponent],
  exports: [LayoutEliteComponent, TopbarComponent, SidebarComponent, PageHeaderComponent, LoginPageComponent, LayoutComponent, TableComponent]
})
export class LayoutEliteModule { }
