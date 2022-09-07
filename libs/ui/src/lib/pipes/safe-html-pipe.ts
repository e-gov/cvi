import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HtmlSanitizeService } from '../services/html-sanitize.service';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly sanitizeService: HtmlSanitizeService
  ) {}

  transform(value?: string): SafeHtml {
    const sanitizedHtml = this.sanitizeService.sanitize(value ? value : '');
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml);
  }
}
