export type StatusBadgeSeverity = 'info' | 'success' | 'warning';

export const statusBadgeCustomPropertyGroups: StatusBadgeCustomPropertyGroup[] =
  [
    {
      severity: 'info',
      customProperties: {
        '--color': '--veera-color-sapphire-blue-10',
        '--background-color': '--veera-color-sapphire-blue-0',
      },
    },
    {
      severity: 'success',
      customProperties: {
        '--color': '--veera-color-sea-green-10',
        '--background-color': '--veera-color-sea-green-0',
      },
    },
    {
      severity: 'warning',
      customProperties: {
        '--color': '--veera-color-dark-tangerine-15',
        '--background-color': '--veera-color-dark-tangerine-1',
        '--border-color': '--veera-color-dark-tangerine-10',
      },
    },
  ];

export type StatusBadgeCustomPropertyGroup = {
  severity: StatusBadgeSeverity;
  customProperties: StatusBadgeCustomProperties;
};

export type StatusBadgeCustomProperties = {
  '--color': string;
  '--background-color': string;
  '--border-color'?: string;
};
