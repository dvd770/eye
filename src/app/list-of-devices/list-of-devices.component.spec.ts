import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDevicesComponent } from './list-of-devices.component';

describe('ListOfDevicesComponent', () => {
  let component: ListOfDevicesComponent;
  let fixture: ComponentFixture<ListOfDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
