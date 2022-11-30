import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TableOfContentsService {
  private currentToCSectionSource = new BehaviorSubject<string>('');
  currentToCSection$ = this.currentToCSectionSource.asObservable();

  setCurrentToCSection(id: string) {
    this.currentToCSectionSource.next(id);
  }
}
