import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-table-of-contents-wrapper',
  templateUrl: './table-of-contents-wrapper.component.html',
})
export class TableOfContentsWrapperComponent {
  @Input() hideNavOnMobile = true;
  @HostBinding('class') get getHostClasses(): string {
    return `veera-table-of-contents${
      this.hideNavOnMobile ? ' is-nav-hidden-on-mobile' : ''
    }`;
  }
}
