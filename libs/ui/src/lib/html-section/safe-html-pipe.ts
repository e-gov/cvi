import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
      parser: {
        lowerCaseAttributeNames: false,
      },
      allowedTags: sanitizeHtml?.defaults?.allowedTags?.concat([
        'cvi-web-labeled-icon',
        'cvi-web-icon',
      ]),
      allowedAttributes: {
        ...sanitizeHtml?.defaults?.allowedAttributes,
        '*': ['class'],
        'cvi-web-labeled-icon': ['name'],
        'cvi-web-icon': ['name'],
      },
    });
  }
}
