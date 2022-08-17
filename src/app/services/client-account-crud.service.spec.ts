import { TestBed } from '@angular/core/testing';

import { ClientAccountCrudService } from './client-account-crud.service';

describe('ClientAccountCrudService', () => {
  let service: ClientAccountCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAccountCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
