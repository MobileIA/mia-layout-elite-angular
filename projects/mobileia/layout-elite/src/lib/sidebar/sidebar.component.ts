import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LayoutMenuService } from '../services/layout-menu.service';

@Component({
  selector: 'mia-layout-elite-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() menuItems = [];

  constructor(private menuService : LayoutMenuService) { 
    
  }

  ngOnInit() {
    this.menuService.getActiveSidebarObservable().subscribe(id => {
      this.cleanActive();
      this.activate(id);
    });
  }

  public clickItemMenu(item){
    this.cleanActive();
    item.is_active = true;
    this.menuService.emitSidebarClick(item.id);
  }

  cleanActive(){
    this.menuItems.forEach(element => {
      element.is_active = false;
    });
  }

  activate(id : number){
    this.menuItems.forEach(element => {
      if(element.id == id){
        element.is_active = true;
      }
    });
  }
}
