import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
} from '@angular/core';
import { VeeraIconName } from '@ria/veera-icons';
import { IconPosition } from './icon-position';

@Component({
  selector: 'veera-ng-labeled-icon',
  templateUrl: './labeled-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabeledIconComponent implements AfterViewInit {
  /** Icon location */
  @Input() iconPosition: IconPosition = 'before';

  /** Icon name */
  @Input() name!: VeeraIconName;

  /** Additional classes for the SVG element */
  @Input() svgClass = '';

  @Input() alignment: 'start' | 'center' = 'start';

  @ViewChild('content') content!: ElementRef;

  heightCSSVar = '';

  @HostBinding('class') get getHostClasses(): string {
    return `veera-labeled-icon veera-labeled-icon--align-${this.alignment}`;
  }

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.heightCSSVar = window.getComputedStyle(
      this.content.nativeElement
    ).lineHeight;
    this.cdRef.markForCheck();
  }
}
