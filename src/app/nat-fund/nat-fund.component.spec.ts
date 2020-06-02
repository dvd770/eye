import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatFundComponent } from './nat-fund.component';

describe('NatFundComponent', () => {
  let component: NatFundComponent;
  let fixture: ComponentFixture<NatFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
