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

  public clickItemMenu(id : number){
    this.clickMenu.emit(id);
  }
}
