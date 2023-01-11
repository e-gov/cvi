import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'veera-ng-storybook-note',
  templateUrl: './storybook-note.component.html',
})
export class StorybookNote {
  @HostBinding('class') get getHostClasses(): string {
    return 'c-storybook-note';
  }
}
