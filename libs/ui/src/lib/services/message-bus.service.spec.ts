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

  it('should only return given type message', (done: any) => {
    const messageTypeA = { type: 'A', data: 'Data A' as unknown } as Message;

    service.push(messageTypeA);

    service.message$('A').subscribe((message) => {
      expect(message).toBe(messageTypeA);
      done();
    });
  });
});
