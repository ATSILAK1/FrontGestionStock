import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDisplayComponent } from './produit-display.component';

describe('ProduitDisplayComponent', () => {
  let component: ProduitDisplayComponent;
  let fixture: ComponentFixture<ProduitDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
