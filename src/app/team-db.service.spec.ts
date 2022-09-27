import { TestBed } from '@angular/core/testing';

import { TeamDbService } from './team-db.service';

describe('TeamDbService', () => {
  let service: TeamDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
