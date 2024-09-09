export type MetadataCardSeverity = 'info' | 'success' | 'warning' | 'error';

export const metadataCardCustomPropertyGroups: MetadataCardCustomPropertyGroup[] =
  [
    {
      severity: 'info',
      customProperties: {
        '--cvi-metadata-card-left-border-color': '--cvi-color-sapphire-blue-10',
      },
    },
    {
      severity: 'success',
      customProperties: {
        '--cvi-metadata-card-left-border-color': '--cvi-color-sea-green-11',
      },
    },
    {
      severity: 'warning',
      customProperties: {
        '--cvi-metadata-card-left-border-color': '--cvi-color-dark-tangerine-10',
      },
    },
    {
      severity: 'error',
      customProperties: {
        '--cvi-metadata-card-left-border-color': '--cvi-color-jasper-10',
      },
    },
  ];

export type MetadataCardCustomPropertyGroup = {
  severity: MetadataCardSeverity;
  customProperties: MetadataCardCustomProperties;
};

export type MetadataCardCustomProperties = {
  '--cvi-metadata-card-left-border-color': string;
};
