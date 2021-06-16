import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukflowerComponent } from './produkflower.component';

describe('ProdukflowerComponent', () => {
  let component: ProdukflowerComponent;
  let fixture: ComponentFixture<ProdukflowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdukflowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukflowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
