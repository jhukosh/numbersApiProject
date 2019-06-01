import { TestBed } from '@angular/core/testing';

import { NumbersApiDatasService } from './numbers-api-datas.service';

describe('NumbersApiDatasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumbersApiDatasService = TestBed.get(NumbersApiDatasService);
    expect(service).toBeTruthy();
  });
});
