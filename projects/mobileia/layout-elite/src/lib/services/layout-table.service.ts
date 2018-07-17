import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MIAFilter } from '../entity/filter.entity';

@Injectable({
  providedIn: 'root'
})
export class LayoutTableService {

  private filterObservable : BehaviorSubject<MIAFilter>;

  constructor() {
    this.filterObservable = new BehaviorSubject<MIAFilter>(new MIAFilter());
  }

  public emitFilter(filter : MIAFilter){
    this.filterObservable.next(filter);
  }

  public getFilterObservable() : Observable<MIAFilter>{
    return this.filterObservable;
  }
}
