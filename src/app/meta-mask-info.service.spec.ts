import { TestBed } from '@angular/core/testing';

import { MetaMaskInfoService } from './meta-mask-info.service';

describe('MetaMaskInfoService', () => {
  let service: MetaMaskInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaMaskInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
