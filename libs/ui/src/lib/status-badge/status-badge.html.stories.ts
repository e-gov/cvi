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
    <span class="cvi-status-badge" style="--color: var(--cvi-color-sapphire-blue-10); --background-color: var(--cvi-color-sapphire-blue-0)"><div>{{ content }}</div></span>
  `,
});

export const Default = Template.bind({});

const TemplateWithIcon: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <span class="cvi-status-badge" style="--color: var(--cvi-color-sapphire-blue-10); --background-color: var(--cvi-color-sapphire-blue-0);">
      <div>
        {{ content }}
        <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class="cvi-status-badge__badge-icon" height="16px">
          <path d="M6.333 3.666h1.334V5H6.334V3.666Zm0 2.667h1.334v4H6.334v-4Zm.667-6A6.67 6.67 0 0 0 .333 7 6.669 6.669 0 0 0 7 13.666 6.669 6.669 0 0 0 13.667 7 6.669 6.669 0 0 0 7 .333Zm0 12A5.34 5.34 0 0 1 1.667 7 5.34 5.34 0 0 1 7 1.666 5.34 5.34 0 0 1 12.334 7 5.34 5.34 0 0 1 7 12.333Z"></path>
        </svg>
      </div>
    </span>
  `,
});

export const WithIcon = TemplateWithIcon.bind({});
