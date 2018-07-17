import { Component, OnInit, Input } from '@angular/core';
import { MIAFilter } from '../entity/filter.entity';
import { LayoutTableService } from '../services/layout-table.service';

@Component({
  selector: 'mia-layout-elite-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() th = [];
  @Input() filter : MIAFilter = new MIAFilter();

  constructor(private tableService : LayoutTableService) { }

  ngOnInit() {
  }

  onClickFilter(item){
    if(item.filter == '' || item.filter == undefined){
      return;
    }
    if(this.filter.title == this.filter.title){
      if(this.filter.asc == 1){
        this.filter.asc = 0;
      }else{
        this.filter.asc = 1;
      }
    }else{
      this.filter.asc = 1;
    }
    this.filter.title = item.filter;
    this.tableService.emitFilter(this.filter);
  }

}
