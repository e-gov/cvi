import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';

export interface Message {
  type: string;
  data?: never;
}

@Injectable({
  providedIn: 'root',
})
export class MessageBusService {
  private message = new BehaviorSubject<Message>({} as Message);

  message$ = (type: string): Observable<Message> =>
    this.message.pipe(filter((msg) => msg.type === type));

  push = (message: Message) => this.message.next(message);

  getLast = () => this.message.value;
}
