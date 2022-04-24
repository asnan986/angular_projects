import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBooksComponent } from './spring-books.component';

describe('SpringBooksComponent', () => {
  let component: SpringBooksComponent;
  let fixture: ComponentFixture<SpringBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
