import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacationventeaddComponent } from './transacationventeadd.component';

describe('TransacationventeaddComponent', () => {
  let component: TransacationventeaddComponent;
  let fixture: ComponentFixture<TransacationventeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransacationventeaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransacationventeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
