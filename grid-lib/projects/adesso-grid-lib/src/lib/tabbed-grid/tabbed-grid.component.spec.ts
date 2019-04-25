import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedGridComponent } from './tabbed-grid.component';

describe('TabbedGridComponent', () => {
  let component: TabbedGridComponent;
  let fixture: ComponentFixture<TabbedGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
