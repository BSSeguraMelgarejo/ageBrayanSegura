import { TestBed } from '@angular/core/testing';

import { CivilizationsService } from './civilizations.service';

describe('CivilizationsService', () => {
  let service: CivilizationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CivilizationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
