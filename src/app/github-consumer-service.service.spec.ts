import { TestBed } from '@angular/core/testing';

import { GithubConsumerServiceService } from './github-consumer-service.service';

describe('GithubConsumerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubConsumerServiceService = TestBed.get(GithubConsumerServiceService);
    expect(service).toBeTruthy();
  });
});
