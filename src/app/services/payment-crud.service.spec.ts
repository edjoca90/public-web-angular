import { TestBed } from '@angular/core/testing';

import { PaymentCrudService } from './payment-crud.service';

describe('PaymentCrudService', () => {
  let service: PaymentCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
