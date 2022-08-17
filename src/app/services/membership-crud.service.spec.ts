import { TestBed } from '@angular/core/testing';

import { MembershipCrudService } from './membership-crud.service';

describe('MembershipCrudService', () => {
  let service: MembershipCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembershipCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
