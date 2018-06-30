import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEliteComponent } from './layout-elite.component';

describe('LayoutEliteComponent', () => {
  let component: LayoutEliteComponent;
  let fixture: ComponentFixture<LayoutEliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutEliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutEliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
