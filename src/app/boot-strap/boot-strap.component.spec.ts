import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootStrapComponent } from './boot-strap.component';

describe('BootStrapComponent', () => {
  let component: BootStrapComponent;
  let fixture: ComponentFixture<BootStrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootStrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootStrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
