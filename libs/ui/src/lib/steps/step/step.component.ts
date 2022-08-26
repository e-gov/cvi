import { Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ria-poc-step',
  templateUrl: './step.component.html',
})
export class StepComponent {

  @Input() title!: string;

  @HostBinding('class') get getHostClasses(): string {
    return 'veera-steps__content-panel';
  }

  constructor(public ref: ElementRef) {}
}
