import { TestBed, inject } from '@angular/core/testing';

import { ChatterbotService } from './chatterbot.service';

describe('ChatterbotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatterbotService]
    });
  });

  it('should be created', inject([ChatterbotService], (service: ChatterbotService) => {
    expect(service).toBeTruthy();
  }));
});
