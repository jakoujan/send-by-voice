import { TestBed, inject } from '@angular/core/testing';

import { MockFirebaseService } from './mock-firebase.service';

describe('MockFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockFirebaseService]
    });
  });

  it('should be created', inject([MockFirebaseService], (service: MockFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
