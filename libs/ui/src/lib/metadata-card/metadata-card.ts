export type MetadataCardSeverity = 'info' | 'success' | 'warning' | 'error';

export const metadataCardCustomPropertyGroups: MetadataCardCustomPropertyGroup[] =
  [
    {
      severity: 'info',
      customProperties: {
        '--left-border-color': '--cvi-color-sapphire-blue-10',
      },
    },
    {
      severity: 'success',
      customProperties: {
        '--left-border-color': '--cvi-color-sea-green-11',
      },
    },
    {
      severity: 'warning',
      customProperties: {
        '--left-border-color': '--cvi-color-dark-tangerine-10',
      },
    },
    {
      severity: 'error',
      customProperties: {
        '--left-border-color': '--cvi-color-jasper-10',
      },
    },
  ];

export type MetadataCardCustomPropertyGroup = {
  severity: MetadataCardSeverity;
  customProperties: MetadataCardCustomProperties;
};

export type MetadataCardCustomProperties = {
  '--left-border-color': string;
};
