import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfegiradminComponent } from './afegiradmin.component';

describe('AfegiradminComponent', () => {
  let component: AfegiradminComponent;
  let fixture: ComponentFixture<AfegiradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfegiradminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfegiradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
