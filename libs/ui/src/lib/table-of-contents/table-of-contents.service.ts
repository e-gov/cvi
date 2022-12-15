import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TableOfContentsService {
  private currentToCSectionTimestamp: number | undefined;
  private currentToCSectionSource = new BehaviorSubject<string>('');
  currentToCSection$ = this.currentToCSectionSource.asObservable();

  /** Timestamp is for ordering sections that are set at the same time */
  setCurrentToCSection(id: string, timestamp?: number) {
    if (timestamp && !this.currentToCSectionTimestamp) {
      this.currentToCSectionTimestamp = timestamp;
      this.currentToCSectionSource.next(id);
      return;
    }

    if (timestamp && timestamp === this.currentToCSectionTimestamp) {
      const next = this.parseNumberPartFromId(id);
      const previous = this.parseNumberPartFromId(
        this.currentToCSectionSource.getValue()
      );
      if (next > previous) {
        return;
      }
    }
    this.currentToCSectionTimestamp = timestamp;
    this.currentToCSectionSource.next(id);
  }

  private parseNumberPartFromId(id: string): number {
    const num = Number(id.split('-').pop());
    return !isNaN(num) ? num : -1;
  }
}
