import {Story, Meta} from '@storybook/angular';
import notes from './circle.html.md';

export default {
  title: 'HTML/Circle',
  parameters: {
    notes,
    options: {selectedPanel: 'storybook/html/panel'},
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
    content: '4',
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: `
    <span class="cvi-circle" style="--border-color: var(--cvi-color-sapphire-blue-13); --color: var(--cvi-color-sapphire-blue-13); --progress-background-color: var(--cvi-color-white);">{{ content }}</span>
  `,
});

export const Default = Template.bind({});

const TemplateWithIcon: Story = (args) => ({
  props: args,
  template: `
    <span class="cvi-circle" style="--border-color: var(--cvi-color-sapphire-blue-13); --color: var(--cvi-color-sapphire-blue-13); --progress-background-color: var(--cvi-color-white);">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="cvi-circle__content-icon" height="24px">
        <path d="M14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7 14 1.4z"></path>
      </svg>
    </span>
  `,
});

export const WithIcon = TemplateWithIcon.bind({});

const TemplateWithSeverity: Story = (args) => ({
  props: args,
  template: `
    <div class="container">
      <span class="cvi-circle" style="--border-color: var(--cvi-color-white); --color: var(--cvi-color-white); --progress-background-color: var(--cvi-color-sea-green-10); --background-color: var(--cvi-color-sea-green-10);">{{ content }}</span>
    </div>
  `,
  styles: [
    `.container {
      width: 50px;
      height: 50px;
      background-color: var(--cvi-color-black-coral-1);
      display: flex;
      justify-content: center;
      align-items: center;
    }`,
  ],
});

export const WithSeverity = TemplateWithSeverity.bind({});

const TemplateWithProgress: Story = (args) => ({
  props: args,
  template: `
    <span class="cvi-circle cvi-circle__with-progress" style="--border-color: var(--cvi-color-sapphire-blue-13); --color: var(--cvi-color-sapphire-blue-13); --progress: 30%; --progress-background-color: var(--cvi-color-white);">{{ content }}</span>
  `,
});

export const WithProgress = TemplateWithProgress.bind({});
