import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysGamesComponent } from './toys-games.component';

describe('ToysGamesComponent', () => {
  let component: ToysGamesComponent;
  let fixture: ComponentFixture<ToysGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
