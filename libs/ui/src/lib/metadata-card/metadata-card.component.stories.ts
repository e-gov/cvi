import { Meta, StoryObj } from '@storybook/angular';
import notes from './metadata-card.component.md';
import { MetadataCardComponent } from './metadata-card.component';

export default {
  title: 'Angular/Metadata Card',
  component: MetadataCardComponent,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    severity: {
      name: 'Severity style',
      control: { type: 'select' },
    },
  },
  args: {
    severity: 'info',
  },
} as Meta<MetadataCardComponent>;

type Story = StoryObj<MetadataCardComponent>;

export const Default: Story = {
  render: (args: MetadataCardComponent) => ({
    props: {
      ...args,
      html: '<div class="cvi-html-section__content-elements"><cvi-web-track gap="4" layout="flex" flex-direction="vertical"><a href="https://www.siseministeerium.ee/maakonnakeskuse-kohalikud-omavalitsused-rahvastiku-toimingute-valdkonnas" target="_blank" class="external-link" rel="noopener noreferrer">Maakonnakeskuse kohalikud omavalitsused</a><a href="https://www.notar.ee/et/notarid/nimekiri" target="_blank" class="external-link" rel="noopener noreferrer">Notarid</a><a href="https://www.siseministeerium.ee/abielu-solmimise-oigust-omavad-vaimulikud" target="_blank" class="external-link" rel="noopener noreferrer">Abielu sõlmimise õigust omavad vaimulikud</a></cvi-web-track></div></div>',
    },
    template: `
    <cvi-ng-track [gap]="4" [flexIsMultiline]="true" horizontalAlignment="left">
      <div style="width: 300px">
        <cvi-ng-metadata-card [severity]="severity">
          <cvi-ng-labeled-item label="Item 1">How do you do?</cvi-ng-labeled-item>
          <cvi-ng-labeled-item
            label="Item 2, so long it does not fit ever even one line. needs breaking into next line in order to fit">
            Hello!
          </cvi-ng-labeled-item>
          <cvi-ng-labeled-item label="Item 3">Some text</cvi-ng-labeled-item>
        </cvi-ng-metadata-card>
      </div>
      <div>
        <cvi-ng-metadata-card [severity]="severity">
          <cvi-ng-html-section html="{{html}}">
          </cvi-ng-html-section>
        </cvi-ng-metadata-card>
      </div>
    </cvi-ng-track>
    `,
  }),
};

export const WithCustomStyle: Story = {
  render: (args: MetadataCardComponent) => ({
    props: args,
    template: `
      <cvi-ng-metadata-card style="--cvi-metadata-card-left-border-color: var(--cvi-color-sea-green-10)">
        <cvi-ng-labeled-item label="Item 1">How do you do?</cvi-ng-labeled-item>
        <cvi-ng-labeled-item label="Item 2">Hello!</cvi-ng-labeled-item>
        <cvi-ng-labeled-item label="Item 3">Some text</cvi-ng-labeled-item>
      </cvi-ng-metadata-card>
    `,
  }),
};

export const Mobile: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};
