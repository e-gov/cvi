import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';
import { Box } from './process-diagram/box.interface';

@Component({
  selector: 'cvi-ng-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  boxes: Box[] = [
    {
      x: 50, y: 100, color: 'red', borderStyle: 'dotted',
      id: 1, link: 'https://example.com/red',
      targets: [2, 3], // red box points to blue and green boxes
      label: 'This <i>is</i> <b>red</b>'
    },
    {
      x: 200, y: 50, color: 'blue', borderStyle: 'none',
      id: 2,
      targets: [4], // blue box points to yellow box
      label: 'This <i>is</i> <b>blue</b>'
    },
    {
      x: 200, y: 150, color: 'green', borderStyle: 'dotted',
      id: 3, link: 'https://example.com/green',
      targets: [5], // green box points to purple box
      label: 'This <i>is</i> <b>green</b>'
    },
    {
      x: 350, y: 40, color: 'yellow', borderStyle: 'none',
      id: 4,
      targets: [6], // yellow box points to cyan box
      label: 'This <i>is</i> <b>yellow</b>'
    },
    {
      x: 350, y: 120, color: 'purple', borderStyle: 'dotted',
      id: 5, link: 'https://example.com/purple',
      targets: [6], // purple box also points to cyan box
      label: 'This <i>is</i> <b>purple</b>. This one has text that does not fit so the box automatically changed its size to be bigger.'
    },
    {
      x: 500, y: 100, color: 'cyan', borderStyle: 'dotted',
      id: 6, // cyan box does not point to any other box
      label: 'This <i>is</i> <b>cyan</b>. This one has more text but fixed width and height.',
      width: 150,
      height: 75
    }
  ];

  constructor(
    private translate: TranslateService,
    private formBuilder: FormBuilder
  ) {
    this.translate.setDefaultLang('et');
    this.translate.use('et');
  }
}
