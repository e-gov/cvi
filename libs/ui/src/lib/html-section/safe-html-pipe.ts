import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import sanitizeHtml, { AllowedAttribute, Attributes } from 'sanitize-html';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  transform(
    value: string,
    allowedTags: string[],
    allowedAttributes: Record<string, AllowedAttribute[]>
  ): string {
    const sanitizedHtml = this.sanitize(
      value ? value : '',
      allowedTags,
      allowedAttributes
    );
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml) as string;
  }

  private sanitize(
    dirty: string,
    allowedTags: string[],
    allowedAttributes?: Record<string, AllowedAttribute[]>
  ): string {
    return sanitizeHtml(dirty, {
      allowedTags: sanitizeHtml?.defaults?.allowedTags?.concat(allowedTags),
      allowedAttributes: {
        ...sanitizeHtml?.defaults?.allowedAttributes,
        '*': ['class'],
        ...allowedAttributes,
      },
    });
  }
}
