import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfournisseurComponent } from './displayfournisseur.component';

describe('DisplayfournisseurComponent', () => {
  let component: DisplayfournisseurComponent;
  let fixture: ComponentFixture<DisplayfournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayfournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
