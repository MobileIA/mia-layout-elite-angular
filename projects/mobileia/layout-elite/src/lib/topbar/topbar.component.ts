import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { AuthenticationService, MIAUser } from '@mobileia/authentication';
import { Router } from '@angular/router';
import { LayoutMenuService } from '../services/layout-menu.service';

@Component({
  selector: 'mia-layout-elite-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() logoIconDark: String = '';
  @Input() logoIcon: String = '';
  @Input() logoTextDark: String = '';
  @Input() logoText: String = '';
  @Input() menuItems = [];
  isMiniSidebar = false;

  currentUser: MIAUser = new MIAUser();

  constructor(private authService: AuthenticationService,
    private router: Router,
    private menuService: LayoutMenuService,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.currentUser.firstname = 'Anonimo';
    // Buscar usuario logueado
    this.authService.getCurrentUser().subscribe(user => {
      if (user == null) {
        return;
      }
      this.currentUser = user;
    });
  }

  public clickItemMenu(id: number) {
    this.menuService.emitTopbarClick(id);
  }

  public clickOpenSidebar() {
    // Obtener body
    const body = document.getElementsByTagName('body')[0];
    // recorremos clases
    for (var i = 0; i < body.classList.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (body.classList[i] == 'show-sidebar') {
        this.renderer.removeClass(document.body, 'show-sidebar');
        return;
      }
    }
    this.renderer.addClass(document.body, 'show-sidebar');
  }

  public onResize(event) {
    if (event.target.innerWidth < 1170) {
      this.isMiniSidebar = true;
      this.renderer.addClass(document.body, 'mini-sidebar');
    } else {
      this.isMiniSidebar = false;
      this.renderer.removeClass(document.body, 'mini-sidebar');
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit(): void {
    if (window.innerWidth < 1170) {
      this.isMiniSidebar = true;
      this.renderer.addClass(document.body, 'mini-sidebar');
    } else {
      this.isMiniSidebar = false;
      this.renderer.removeClass(document.body, 'mini-sidebar');
    }
  }
}
