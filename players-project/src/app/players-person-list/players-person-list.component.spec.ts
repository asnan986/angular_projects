import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersPersonListComponent } from './players-person-list.component';

describe('PlayersPersonListComponent', () => {
  let component: PlayersPersonListComponent;
  let fixture: ComponentFixture<PlayersPersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersPersonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
