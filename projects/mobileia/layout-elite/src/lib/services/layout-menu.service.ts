import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutMenuService {

  private sidebarMenuObservable : BehaviorSubject<number>;
  private activeSidebarMenuObservable : BehaviorSubject<number>;

  private topbarMenuObservable : BehaviorSubject<number>;

  constructor() { 
    this.sidebarMenuObservable = new BehaviorSubject<number>(-1);
    this.activeSidebarMenuObservable = new BehaviorSubject<number>(-1);

    this.topbarMenuObservable = new BehaviorSubject<number>(-1);
  }

  activatedSidebar(id : number){
    this.activeSidebarMenuObservable.next(id);
  }

  emitSidebarClick(id: number) {
    this.sidebarMenuObservable.next(id);
  }

  emitTopbarClick(id: number) {
    this.topbarMenuObservable.next(id);
  }

  getSidebarMenuObservable() : Observable<number> {
    return this.sidebarMenuObservable;
  }

  getActiveSidebarObservable() : Observable<number>{
    return this.activeSidebarMenuObservable;
  }

  getTopbarMenuObservable() : Observable<number>{
    return this.topbarMenuObservable;
  }
}
