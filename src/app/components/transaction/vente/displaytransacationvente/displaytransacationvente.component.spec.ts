import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytransacationventeComponent } from './displaytransacationvente.component';

describe('DisplaytransacationventeComponent', () => {
  let component: DisplaytransacationventeComponent;
  let fixture: ComponentFixture<DisplaytransacationventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaytransacationventeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaytransacationventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
