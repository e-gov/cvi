import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { concatMap, delay, from, of } from 'rxjs';
import notes from './accordion.component.md';
import { AccordionComponent } from './accordion.component';
import { UiModule } from '../ui.module';

export default {
  title: 'Angular/Accordion',
  parameters: { notes },
  args: {
    singleOpen: true,
    content$: from([
      [
        {
          title: 'I am the title of the first observable array element',
          content: 'Content is irrelevant',
        },
        {
          title: 'I am the title of the second observable array element',
          content: 'This content is also irrelevant',
        },
      ],
    ]).pipe(concatMap((item) => of(item).pipe(delay(500)))),
  },
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    }),
  ],
} as Meta<AccordionComponent>;

const Template: Story<AccordionComponent> = (args: AccordionComponent) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-accordion [singleOpen]="singleOpen">
      <veera-ng-accordion-item title="Super simple accordion">
        <ng-template veeraNgAccordionContent>
          <p>Some content here. Yes! In your face, Gandhi! I'll get my kit! And I'd do it again! And perhaps a third time! But that would be it. What are you hacking off? Is it my torso?! 'It is!' My precious torso! OK, if everyone's finished being stupid.</p>
        </ng-template>
      </veera-ng-accordion-item>
      <veera-ng-accordion-item title="Another item with details" details="Viimati muudetud 23.12.2023 | Teksti koostas Justiitsministeerium">
        <ng-template veeraNgAccordionContent>
          Qua qua
        </ng-template>
      </veera-ng-accordion-item>
      <veera-ng-accordion-item title="Yet another item, but this time disabled with a very long text" [disabled]="true">
        <ng-template veeraNgAccordionContent>
          Howdy!
        </ng-template>
      </veera-ng-accordion-item>
      <veera-ng-accordion-item title="And until then, I can never die? Noooooo! I can explain. It's very valuable. Oh, all right, I am. You, minion. Lift my arm. AFTER HIM! You can crush me but you can't crush my spirit! I've been there. My folks were always on me to groom myself and wear underpants. What am I, the pope? A true inspiration for the children.">
        <ng-template veeraNgAccordionContent>
          One helluva content
        </ng-template>
      </veera-ng-accordion-item>
      <veera-ng-accordion-item
        *ngFor="let elem of content$ | async"
        title="{{elem.title}}">
        <ng-template veeraNgAccordionContent>
          <p>{{elem.content}}</p>
        </ng-template>
      </veera-ng-accordion-item>
    </veera-ng-accordion>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Mobile = Template.bind({});
Mobile.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'light',
  },
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

const TemplateCustomTitle: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-accordion [singleOpen]="singleOpen">
      <veera-ng-accordion-item>
        <ng-template veeraNgAccordionTitle>
          <h1>Custom title with custom HTML and a flag</h1>
          <svg viewBox="0 471.001 11.999 8.999" width="11.999" height="8.999">
            <g fill-rule="evenodd" stroke-width="1pt" style="" transform="matrix(0.018748, 0, 0, 0.018748, 0, 471.001068)">
              <rect width="640" height="477.9" rx="0" ry="0"></rect>
              <rect width="640" height="159.3" y="320.7" fill="#fff" rx="0" ry="0"></rect>
              <path fill="#1791ff" d="M0 0h640v159.3H0z"></path>
            </g>
          </svg>
        </ng-template>
        <ng-template veeraNgAccordionContent>
          <p>Some content here. Yes! In your face, Gandhi! I'll get my kit! And I'd do it again! And perhaps a third time! But that would be it. What are you hacking off? Is it my torso?! 'It is!' My precious torso! OK, if everyone's finished being stupid.</p>
        </ng-template>
      </veera-ng-accordion-item>
    </veera-ng-accordion>
  `,
});

export const WithCustomTitle = TemplateCustomTitle.bind({});
WithCustomTitle.args = {};

const TemplateCustomHeader: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-accordion [singleOpen]="singleOpen">
      <veera-ng-accordion-item>
        <ng-template veeraNgAccordionHeader let-toggle="toggle">
          <h1>Custom header with custom HTML and a button</h1>
          <button (click)="toggle()">I am a custom button, click me to toggle this item!</button>
        </ng-template>
        <ng-template veeraNgAccordionContent>
          <p>Some content here. Yes! In your face, Gandhi! I'll get my kit! And I'd do it again! And perhaps a third time! But that would be it. What are you hacking off? Is it my torso?! 'It is!' My precious torso! OK, if everyone's finished being stupid.</p>
        </ng-template>
      </veera-ng-accordion-item>
    </veera-ng-accordion>
  `,
});

export const WithCustomHeader = TemplateCustomHeader.bind({});
WithCustomHeader.args = {};
