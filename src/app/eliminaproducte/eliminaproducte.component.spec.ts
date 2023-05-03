import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaproducteComponent } from './eliminaproducte.component';

describe('EliminaproducteComponent', () => {
  let component: EliminaproducteComponent;
  let fixture: ComponentFixture<EliminaproducteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaproducteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminaproducteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
