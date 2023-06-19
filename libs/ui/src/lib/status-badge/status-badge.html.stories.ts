import { Story, Meta } from '@storybook/angular';
import notes from './status-badge.html.md';

export default {
  title: 'HTML/Status badge',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
    layout: 'centered',
  },
  argTypes: {
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
    },
  },
  args: {
    content: 'Waiting',
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <span class="cvi-status-badge" style="--color: var(--cvi-color-sapphire-blue-10); --background-color: var(--cvi-color-sapphire-blue-0)">{{ content }}</span>
  `,
});

export const Default = Template.bind({});
