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

  constructor(private authService : AuthenticationService,
    private router: Router) { }

  public clickMenu(id : number){
    console.log("Menu: " + id);
    if(id == 4){
      this.logout();
    }
  }

  /**
   * logout
   */
  public logout() {
    this.authService.signOut();
    this.router.navigate(['/']);  
  }
}
