import { Component } from '@angular/core';
import { AuthenticationService } from '@mobileia/authentication';
import { Router } from '@angular/router';
import { LayoutMenuService } from 'projects/mobileia/layout-elite/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLogged = false;

  topbarMenu = [{
    id: 1,
    title: 'Mi perfil',
    icon: ''
  },
  {
    id: 2,
    title: 'Ejemplo 2',
    icon: ''
  },
  {
    separator: true
  },
  {
    id: 3,
    title: 'Mi perfil',
    icon: 'fa fa-user'
  },
  {
    separator: true
  },
  {
    id: 4,
    title: 'Salir',
    icon: 'fa fa-power-off'
  }];

  sidebarMenu = [
    {
      is_group: true,
      title: '--- MENU PRINCIPAL'
    },
    {
    id: 1,
    title: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    is_active: false
  },
  {
    id: 2,
    title: 'Ejemplo',
    icon: 'fas fa-tachometer-alt',
    budge: '4'
  }
];

  constructor(private authService : AuthenticationService,
    private router: Router,
  private menuService : LayoutMenuService) { 

      this.authService.isLoggedBehavior().subscribe(logged => {
        this.isLogged = logged;
      });

      this.menuService.getSidebarMenuObservable().subscribe(id => {
        this.clickSidebarMenu(id);
      });
    }

  public clickTopbarMenu(id : number){
    if(id == 4){
      this.logout();
    }
  }

  public clickSidebarMenu(id: number){
    console.log("Sidebar Menu: " + id);
  }

  /**
   * logout
   */
  public logout() {
    this.authService.signOut();
    this.router.navigate(['/login']); 
    this.isLogged = false; 
  }
}
