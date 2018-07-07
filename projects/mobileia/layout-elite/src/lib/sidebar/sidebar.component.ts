import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mia-layout-elite-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() menuItems = [];
  @Output() clickMenu = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public clickItemMenu(item){
    this.cleanActive();
    item.is_active = true;
    this.clickMenu.emit(item.id);
  }

  cleanActive(){
    this.menuItems.forEach(element => {
      element.is_active = false;
    });
  }
}
