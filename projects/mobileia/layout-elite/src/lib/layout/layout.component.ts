import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mia-layout-elite',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  title = 'app';
  
  @Input() isLogged = false;

  @Input() logoIconDark : String = "";
  @Input() logoIcon : String = "";
  @Input() logoTextDark : String = "";
  @Input() logoText : String = "";
  @Input() topbarMenu = [];
  @Input() sidebarMenu = [];
  
  constructor() { 

  }

  ngOnInit() {
  }
}
