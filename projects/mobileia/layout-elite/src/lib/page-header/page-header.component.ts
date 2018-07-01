import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mia-layout-elite-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() title : String = "";
  @Input() breadcrumb = [];

  constructor() { }

  ngOnInit() {
  }

}
