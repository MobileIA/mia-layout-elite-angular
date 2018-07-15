import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from '../../../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutMenuService {

  private sidebarMenuObservable : BehaviorSubject<number>;
  private activeSidebarMenuObservable : BehaviorSubject<number>;

  constructor() { 
    this.sidebarMenuObservable = new BehaviorSubject<number>(-1);
    this.activeSidebarMenuObservable = new BehaviorSubject<number>(-1);
  }

  activatedSidebar(id : number){
    this.activeSidebarMenuObservable.next(id);
  }

  emitSidebarClick(id: number) {
    this.sidebarMenuObservable.next(id);
  }

  getSidebarMenuObservable() : Observable<number> {
    return this.sidebarMenuObservable;
  }

  getActiveSidebarObservable() : Observable<number>{
    return this.activeSidebarMenuObservable;
  }
}
