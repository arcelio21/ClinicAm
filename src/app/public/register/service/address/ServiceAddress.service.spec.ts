/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AddressService } from './Address.service';

describe('Service: ServiceAddress', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressService]
    });
  });

  it('should ...', inject([AddressService], (service: AddressService) => {
    expect(service).toBeTruthy();
  }));
});
