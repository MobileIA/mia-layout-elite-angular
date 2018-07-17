import { Component, OnInit } from '@angular/core';
import { LayoutMenuService, LayoutTableService } from 'projects/mobileia/layout-elite/src/public_api';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor(private menuService : LayoutMenuService,
    private tableService : LayoutTableService) {
    this.menuService.activatedSidebar(2);
   }

  ngOnInit() {
    this.tableService.getFilterObservable().subscribe(filter => {
      console.log(filter);
    });
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

}
