import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionachataddComponent } from './transactionachatadd.component';

describe('TransactionachataddComponent', () => {
  let component: TransactionachataddComponent;
  let fixture: ComponentFixture<TransactionachataddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionachataddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionachataddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
