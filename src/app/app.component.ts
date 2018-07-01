import { Component } from '@angular/core';
import { AuthenticationService } from '@mobileia/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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
    is_active: true
  },
  {
    id: 2,
    title: 'Ejemplo',
    icon: 'fas fa-tachometer-alt',
    budge: '4'
  }
];

  constructor(private authService : AuthenticationService,
    private router: Router) { }

  public clickTopbarMenu(id : number){
    console.log("Menu: " + id);
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
    this.router.navigate(['/']);  
  }
}
