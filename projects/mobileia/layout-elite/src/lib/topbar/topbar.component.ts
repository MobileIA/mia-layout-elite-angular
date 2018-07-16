import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService, MIAUser } from '@mobileia/authentication';
import { Router } from '@angular/router';
import { LayoutMenuService } from '../services/layout-menu.service';

@Component({
  selector: 'mia-layout-elite-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() logoIconDark : String = "";
  @Input() logoIcon : String = "";
  @Input() logoTextDark : String = "";
  @Input() logoText : String = "";
  @Input() menuItems = [];

  currentUser : MIAUser = new MIAUser();

  constructor(private authService : AuthenticationService,
    private router: Router, 
    private menuService : LayoutMenuService) { }

  ngOnInit() {
    this.currentUser.firstname = "Anonimo";
    // Buscar usuario logueado
    this.authService.getCurrentUser().subscribe(user => {
      if(user == null){
        return;
      }
      this.currentUser = user;
    });
  }

  public clickItemMenu(id : number){
    this.menuService.emitTopbarClick(id);
  }
}
