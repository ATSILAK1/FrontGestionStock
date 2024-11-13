import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionachatdisplayComponent } from './transactionachatdisplay.component';

describe('TransactionachatdisplayComponent', () => {
  let component: TransactionachatdisplayComponent;
  let fixture: ComponentFixture<TransactionachatdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionachatdisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionachatdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
