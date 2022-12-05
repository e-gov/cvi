import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import sanitizeHtml from 'sanitize-html';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  transform(value?: string): string {
    const sanitizedHtml = this.sanitize(value ? value : '');
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml) as string;
  }

  private sanitize(dirty: string): string {
    return sanitizeHtml(dirty, {
      allowedTags: sanitizeHtml?.defaults?.allowedTags?.concat([
        'veera-web-labeled-icon',
        'veera-web-icon',
      ]),
      allowedAttributes: {
        ...sanitizeHtml?.defaults?.allowedAttributes,
        '*': ['class'],
        'veera-web-labeled-icon': ['name'],
        'veera-web-icon': ['name'],
      },
    });
  }
}
