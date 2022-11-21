import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TableOfContentsService {
  currentToCSection = '';
  private currentToCSectionSource = new BehaviorSubject<string>('');
  currentToCSection$ = this.currentToCSectionSource.asObservable();

  setCurrentToCSection(id: string) {
    this.currentToCSection = id;
    this.currentToCSectionSource.next(id);
  }
}
