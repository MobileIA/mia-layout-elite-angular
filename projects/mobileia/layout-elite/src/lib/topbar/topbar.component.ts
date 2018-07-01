import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService, MIAUser } from '@mobileia/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'mia-layout-elite-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input() logoIconDark : String = "";
  @Input() logoIcon : String = "";
  @Input() logoTextDark : String = "";
  @Input() logoText : String = "";
  @Input() menuItems = [];
  @Output() clickMenu = new EventEmitter();

  currentUser : MIAUser = new MIAUser();

  constructor(private authService : AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser.firstname = "Anonimo";
    // Buscar usuario logueado
    this.authService.getCurrentUser(user => {
      if(user == null){
        return;
      }
      this.currentUser = user;
    });
  }

  public clickItemMenu(id : number){
    this.clickMenu.emit(id);
  }

  /**
   * logout
   */
  public logout() {
    this.authService.signOut();
    this.router.navigate(['/']);  
  }
}
