import { TestBed } from '@angular/core/testing';

import { PagesCommunicationService } from './pages-communication.service';

describe('PagesCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagesCommunicationService = TestBed.get(PagesCommunicationService);
    expect(service).toBeTruthy();
  });
});
