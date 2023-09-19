import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html-pipe';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            sanitize: (ctx: any, val: string) => val,
            bypassSecurityTrustHtml: (val: string) => val,
          },
        },
      ],
    });

    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new SafeHtmlPipe(sanitizer);
  });

  it('should remove potentially harmful tags from HTML', () => {
    const dirtyHtml = '<script>alert("xss")</script><p>clean</p>';
    const sanitized = pipe.transform(dirtyHtml, [], {});
    expect(sanitized).not.toContain('<script>');
    expect(sanitized).toContain('<p>clean</p>');
  });

  it('should call DomSanitizer.bypassSecurityTrustHtml method', () => {
    const spy = jest.spyOn(sanitizer, 'bypassSecurityTrustHtml');
    const cleanHtml = '<p>clean</p>';
    pipe.transform(cleanHtml, [], {});
    expect(spy).toHaveBeenCalledWith(expect.any(String));
  });

  it('should correctly handle additional allowed tags', () => {
    const dirtyHtml = '<mytag>content</mytag><p>clean</p>';
    const sanitized = pipe.transform(dirtyHtml, ['mytag'], {});
    expect(sanitized).toContain('<mytag>content</mytag>');
  });

  it('should correctly handle additional allowed attributes', () => {
    const dirtyHtml = '<p newattr="yes">clean</p>';
    const sanitized = pipe.transform(dirtyHtml, [], { p: ['newattr'] });
    expect(sanitized).toContain('newattr="yes"');
  });

  it('should remove disallowed attributes', () => {
    const dirtyHtml = '<p badattr="no">clean</p>';
    const sanitized = pipe.transform(dirtyHtml, [], {});
    expect(sanitized).not.toContain('badattr="no"');
  });

  it('should handle empty, null, or undefined inputs gracefully', () => {
    expect(pipe.transform('', [], {})).toEqual('');
    expect(pipe.transform(null as any, [], {})).toEqual('');
    expect(pipe.transform(undefined as any, [], {})).toEqual('');
  });

  it('should correctly handle custom elements', () => {
    const dirtyHtml = '<my-element attr="value">Content</my-element>';
    const allowedTags = ['my-element'];
    const allowedAttributes = { 'my-element': ['attr'] };

    const sanitized = pipe.transform(dirtyHtml, allowedTags, allowedAttributes);

    expect(sanitized).toContain('<my-element attr="value">');
    expect(sanitized).toContain('</my-element>');
  });
});
