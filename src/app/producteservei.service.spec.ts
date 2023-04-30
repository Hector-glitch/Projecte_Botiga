import { TestBed } from '@angular/core/testing';

import { ProducteserveiService } from './producteservei.service';

describe('ProducteserveiService', () => {
  let service: ProducteserveiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducteserveiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
