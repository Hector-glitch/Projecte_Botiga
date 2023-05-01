import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfegirproducteComponent } from './afegirproducte.component';

describe('AfegirproducteComponent', () => {
  let component: AfegirproducteComponent;
  let fixture: ComponentFixture<AfegirproducteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfegirproducteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfegirproducteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
