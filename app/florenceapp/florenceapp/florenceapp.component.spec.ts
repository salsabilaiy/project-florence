import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorenceappComponent } from './florenceapp.component';

describe('FlorenceappComponent', () => {
  let component: FlorenceappComponent;
  let fixture: ComponentFixture<FlorenceappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlorenceappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlorenceappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
