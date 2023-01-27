import { TestBed } from '@angular/core/testing';

import { Message, MessageBusService } from '@egov/cvi-ng';

describe('MessageBusService', () => {
  let service: MessageBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBusService);
  });

  it('should return an empty message by default', () => {
    expect(service.getLast()).toEqual({} as Message);
  });

  it('should push message', () => {
    expect(service.getLast()).toEqual({} as Message);

    const messageTypeA = { type: 'A' } as Message;
    service.push(messageTypeA);

    expect(service.getLast()).toEqual(messageTypeA);
  });
});
