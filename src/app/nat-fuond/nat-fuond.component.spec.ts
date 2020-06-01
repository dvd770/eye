import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatFuondComponent } from './nat-fuond.component';

describe('NatFuondComponent', () => {
  let component: NatFuondComponent;
  let fixture: ComponentFixture<NatFuondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatFuondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatFuondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
