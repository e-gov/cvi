import { Injectable } from '@angular/core';
import * as sanitizeHtml from 'sanitize-html';

@Injectable({
  providedIn: 'root',
})
export class HtmlSanitizeService {
  public sanitize(dirty: string): string {
    return sanitizeHtml(dirty, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'veera-ng-labeled-icon',
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        '*': ['class'],
        'veera-ng-labeled-icon': ['name'],
      },
    });
  }
}
