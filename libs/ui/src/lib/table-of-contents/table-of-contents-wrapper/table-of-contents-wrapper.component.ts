import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'cvi-ng-table-of-contents-wrapper',
  templateUrl: './table-of-contents-wrapper.component.html',
})
export class TableOfContentsWrapperComponent {
  @Input() hideNavOnMobile = true;
  @HostBinding('class') get getHostClasses(): string {
    return `cvi-table-of-contents${
      this.hideNavOnMobile ? ' is-nav-hidden-on-mobile' : ''
    }`;
  }
}
