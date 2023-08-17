import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';
import { Box } from './process-diagram/box';

@Component({
  selector: 'cvi-ng-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  boxes: Box[] = [
    {
      x: 10,
      y: 150,
      color: '#F0F0F2',
      borderStyle: 'solid',
      borderColor: '#D73E3E',
      id: 1,
      link: 'https://example.com/1',
      label: '<p style="color:#D73E3E">Health concern</p>',
      targets: [2, 7],
    },
    {
      x: 150,
      y: 80,
      color: '#FFF1D3',
      borderStyle: 'none',
      id: 2,
      link: 'https://example.com/2',
      label: 'I have a minor health issue',
      targets: [3, 4, 5],
    },
    {
      x: 280,
      y: 20,
      color: '#FFF1D3',
      borderStyle: 'none',
      id: 3,
      link: 'https://example.com/3',
      label: 'Pharmacy',
    },
    {
      x: 280,
      y: 80,
      color: '#FFF1D3',
      borderStyle: 'none',
      id: 4,
      link: 'https://example.com/4',
      label: 'Helpline 1220',
    },
    {
      x: 280,
      y: 140,
      color: '#FFF1D3',
      borderStyle: 'none',
      id: 5,
      link: 'https://example.com/5',
      label: '<b>Family doctor</b>',
      targets: [6, 9],
    },
    {
      x: 410,
      y: 60,
      color: '#B9D2E5',
      borderColor: '#3B85BD',
      borderStyle: 'dotted',
      id: 6,
      link: 'https://example.com/6',
      label: 'Specialist doctor',
      targets: [9],
    },
    {
      x: 410,
      y: 140,
      color: '#CECFD8',
      borderStyle: 'none',
      id: 9,
      link: 'https://example.com/9',
      label: 'Conclusions/Referrals',
      targets: [10, 11],
    },
    {
      x: 550,
      y: 140,
      color: '#ECF4EF',
      borderStyle: 'dotted',
      borderColor: '#399E43',
      id: 10,
      link: 'https://example.com/10',
      label: 'Treatment at home',
    },
    {
      x: 150,
      y: 220,
      color: '#FCEEEE',
      borderStyle: 'none',
      id: 7,
      link: 'https://example.com/7',
      label: 'I have an acute health issue and need emergency care',
      targets: [8],
    },
    {
      x: 280,
      y: 220,
      color: '#FCEEEE',
      borderStyle: 'none',
      id: 8,
      link: 'https://example.com/8',
      label: '<b>Call 112 or go to ER</b>',
      targets: [11],
    },
    {
      x: 410,
      y: 220,
      color: '#FCEEEE',
      borderStyle: 'dotted',
      borderColor: '#D73E3E',
      id: 11,
      link: 'https://example.com/11',
      label: 'Hospitalization',
      targets: [9],
    },
  ];

  constructor(
    private translate: TranslateService,
    private formBuilder: FormBuilder
  ) {
    this.translate.setDefaultLang('et');
    this.translate.use('et');
  }
}
