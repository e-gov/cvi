import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import sanitizeHtml from 'sanitize-html';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  transform(value?: string): SafeHtml {
    const sanitizedHtml = this.sanitize(value ? value : '');
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml);
  }

  private sanitize(dirty: string): string {
    return sanitizeHtml(dirty, {
      allowedTags: sanitizeHtml?.defaults?.allowedTags?.concat([
        'veera-ng-labeled-icon',
        'veera-ng-icon',
      ]),
      allowedAttributes: {
        ...sanitizeHtml?.defaults?.allowedAttributes,
        '*': ['class'],
        'veera-ng-labeled-icon': ['name'],
        'veera-ng-icon': ['name'],
      },
    });
  }
}
