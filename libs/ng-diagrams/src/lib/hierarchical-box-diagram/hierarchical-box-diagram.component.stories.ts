import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HierarchicalBoxDiagramComponent } from './hierarchical-box-diagram.component';

export default {
  title: 'Angular Diagrams/Hierarchical Box Diagram',
  component: HierarchicalBoxDiagramComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#ffffff' }],
    },
    viewport: {
      defaultViewport: 'custom',
      viewports: {
        custom: {
          name: 'Custom Viewport',
          styles: {
            width: '800px',
            height: '400px',
          },
        },
      },
    },
  },
} as Meta<HierarchicalBoxDiagramComponent>;

const Template: Story<HierarchicalBoxDiagramComponent> = (
  args: HierarchicalBoxDiagramComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  boxes: [
    {
      ...baseBoxStyles('#F0F0F2', 'solid', '#D73E3E'),
      id: '1',
      href: 'https://example.com/1',
      label: '<p style="color:#D73E3E">Health concern</p>',
      targets: ['2', '7'],
    },
    ...defaultBoxes([
      { id: '2', href: 'https://example.com/2', label: 'I have a minor health issue', targets: ['3', '4', '5'] },
      { id: '3', href: 'https://example.com/3', label: 'Pharmacy' },
      { id: '4', href: 'https://example.com/4', label: 'Helpline 1220' },
      { id: '5', href: 'https://example.com/5', label: '<b>Family doctor</b>', targets: ['6', '9'] }
    ]),
    {
      ...dottedBoxStyles('#B9D2E5', '#3B85BD'),
      id: '6',
      href: 'https://example.com/6',
      label: 'Specialist doctor',
      targets: ['9'],
    },
    {
      ...baseBoxStyles('#CECFD8'),
      id: '9',
      href: 'https://example.com/9',
      label: 'Conclusions/Referrals',
      targets: ['10', '11'],
    },
    {
      ...dottedBoxStyles('#ECF4EF', '#399E43'),
      id: '10',
      href: 'https://example.com/10',
      label: 'Treatment at home',
    },
    {
      ...baseBoxStyles('#FBEDED'),
      id: '7',
      href: 'https://example.com/7',
      label: 'I have an acute health issue and need emergency care',
      targets: ['8'],
    },
    {
      ...baseBoxStyles('#FCEEEE'),
      id: '8',
      href: 'https://example.com/8',
      label: '<b>Call 112 or go to ER</b>',
      targets: ['11'],
    },
    {
      ...dottedBoxStyles('#FCEEEE', '#D73E3E'),
      id: '11',
      href: 'https://example.com/11',
      label: 'Hospitalization',
      targets: ['9'],
    },
  ],
};

function baseBoxStyles(color: string, borderStyle: string = 'none', borderColor: string = 'transparent') {
  return {
    color: color,
    borderStyle: borderStyle,
    borderColor: borderColor,
  };
}

function dottedBoxStyles(color: string, borderColor: string) {
  return {
    ...baseBoxStyles(color, 'dotted', borderColor)
  };
}

function defaultBoxes(boxes: Array<any>) {
  return boxes.map(box => ({
    ...baseBoxStyles('#FFF1D3'),
    ...box
  }));
}
