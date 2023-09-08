export type CircleTheme = 'light' | 'dark';

export type CircleSeverity = 'success' | 'error' | 'none' | 'info';

export type CircleThemeProperties = {
  '--border-color': string;
  '--color': string;
};

export type CircleThemePropertyGroup = {
  theme: CircleTheme;
  properties: CircleThemeProperties;
};

export type CircleSeverityProperties = {
  '--background-color': string;
};

export type CircleSeverityPropertyGroup = {
  severity: CircleSeverity;
  properties: CircleSeverityProperties;
};

export const circleThemePropertyGroups: CircleThemePropertyGroup[] = [
  {
    theme: 'dark',
    properties: {
      '--border-color': '--cvi-color-sapphire-blue-13',
      '--color': '--cvi-color-sapphire-blue-13',
    },
  },
  {
    theme: 'light',
    properties: {
      '--border-color': '--cvi-color-white',
      '--color': '--cvi-color-white',
    },
  },
];

export const circleSeverityPropertyGroups: CircleSeverityPropertyGroup[] = [
  {
    severity: 'success',
    properties: {
      '--background-color': '--cvi-color-sea-green-10',
    },
  },
  {
    severity: 'error',
    properties: {
      '--background-color': '--cvi-color-jasper-10',
    },
  },
  {
    severity: 'none',
    properties: {
      '--background-color': 'transparent',
    },
  },
  {
    severity: 'info',
    properties: {
      '--background-color': '--cvi-color-sapphire-blue-13',
    },
  },
];
