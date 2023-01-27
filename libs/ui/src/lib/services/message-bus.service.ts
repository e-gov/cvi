import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from "rxjs";

export interface Message {
  type: string,
  data?: never;
}

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {

  private messages = new BehaviorSubject<Message>({} as Message);
  messages$ = (type: string): Observable<Message> => this.messages.pipe(filter(msg => msg.type === type));

  push = (message: Message) => this.messages.next(message);
}
