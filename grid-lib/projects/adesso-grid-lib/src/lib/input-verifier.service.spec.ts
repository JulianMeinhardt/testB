import { TestBed } from '@angular/core/testing';

import { InputVerifierService } from './input-verifier.service';

describe('InputVerifierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputVerifierService = TestBed.get(InputVerifierService);
    expect(service).toBeTruthy();
  });
});
