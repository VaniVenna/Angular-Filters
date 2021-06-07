import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSubMenuComponent } from './filter-sub-menu.component';

describe('FilterSubMenuComponent', () => {
  let component: FilterSubMenuComponent;
  let fixture: ComponentFixture<FilterSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSubMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
