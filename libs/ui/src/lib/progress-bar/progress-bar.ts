export type ProgressBarTheme = 'dark';

export type ProgressBarSeverity = 'none' | 'success';

export type ProgressBarThemeProperties = {
  '--border-color': string;
  '--color': string;
};

export type ProgressBarThemePropertyGroup = {
  theme: ProgressBarTheme;
  properties: ProgressBarThemeProperties;
};

export type ProgressBarSeverityProperties = {
  '--background-color': string;
  '--progress-background-color': string;
  '--color'?: string;
};

export type ProgressBarSeverityPropertyGroup = {
  severity: ProgressBarSeverity;
  properties: ProgressBarSeverityProperties;
};

export const progressThemePropertyGroups: ProgressBarThemePropertyGroup[] = [
  {
    theme: 'dark',
    properties: {
      '--border-color': '--cvi-color-sapphire-blue-13',
      '--color': '--cvi-color-sapphire-blue-13',
    },
  },
];

export const progressBarSeverityPropertyGroups: ProgressBarSeverityPropertyGroup[] =
  [
    {
      severity: 'none',
      properties: {
        // Note that literal, non CSS-variable-like values like this need special treatment in the component logic
        '--background-color': 'transparent',
        '--progress-background-color': '--cvi-color-white',
      },
    },
    {
      severity: 'success',
      properties: {
        '--background-color': '--cvi-color-sea-green-10',
        '--progress-background-color': '--cvi-color-sea-green-10',
        '--color': '--cvi-color-white',
      },
    },
  ];
