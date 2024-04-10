import { Meta } from '@storybook/angular';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { storybookIconsNames } from '../../../../../ui/src/lib/icons/storybook-icons';

export default {
  title: 'Icons/Available Icons',
  parameters: {
    layout: 'padded',
    axe: {
      skip: true,
    },
    backgrounds: {
      default: 'Darkgray',
    },
  },
  argTypes: {
    fill: {
      name: 'Icon color',
      control: { type: 'color' },
    },
  },
  args: {
    fill: 'red',
  },
} as Meta;

export const Default = {
  render: (args: any) => ({
    props: {
      ...args,
      icons: storybookIconsNames,
      filteredIcons: storybookIconsNames,
      filterIcons: (query: string, icons: string[]) => {
        return query
          ? icons.filter((iconName) => iconName.includes(query))
          : icons;
      },
    },
    template: `
      <input type="text" #search (input)="filteredIcons = filterIcons(search.value, icons)" cviNgStorybookInput placeholder="Type icon name...">
      <cvi-ng-storybook-icon-cards>
        <cvi-ng-storybook-icon-card *ngFor="let name of filteredIcons" [label]="name" [ngStyle]="{ 'fill': fill }">
          <cvi-ng-icon [name]="name"></cvi-ng-icon>
        </cvi-ng-storybook-icon-card>
      </cvi-ng-storybook-icon-cards>
    `,
  }),
};
