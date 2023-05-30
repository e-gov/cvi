export type StatusBadgeSeverity = 'info' | 'success' | 'warning';

export const statusBadgeCustomPropertyGroups: StatusBadgeCustomPropertyGroup[] =
  [
    {
      severity: 'info',
      customProperties: {
        '--color': '--cvi-color-sapphire-blue-10',
        '--background-color': '--cvi-color-sapphire-blue-0',
      },
      withTooltip: false,
    },
    {
      severity: 'success',
      customProperties: {
        '--color': '--cvi-color-sea-green-11',
        '--background-color': '--cvi-color-sea-green-0',
      },
      withTooltip: false,
    },
    {
      severity: 'warning',
      customProperties: {
        '--color': '--cvi-color-dark-tangerine-15',
        '--background-color': '--cvi-color-dark-tangerine-1',
        '--border-color': '--cvi-color-dark-tangerine-10',
      },
      withTooltip: false,
    },
  ];

export type StatusBadgeCustomPropertyGroup = {
  severity: StatusBadgeSeverity;
  customProperties: StatusBadgeCustomProperties;
  withTooltip: boolean;
  tooltipText?: string;
};

export type StatusBadgeCustomProperties = {
  '--color': string;
  '--background-color': string;
  '--border-color'?: string;
};
