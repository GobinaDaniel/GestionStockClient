import { TestBed } from '@angular/core/testing';

import { ProduitsService } from './produits.smock.service';

describe('ProduitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduitsService = TestBed.get(ProduitsService);
    expect(service).toBeTruthy();
  });
});
