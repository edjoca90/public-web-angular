import { TestBed } from '@angular/core/testing';

import { ClientCrudService } from './client-crud.service';

describe('ClientCrudService', () => {
  let service: ClientCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
