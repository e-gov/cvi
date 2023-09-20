export type CircleTheme = 'dark' | 'light';

export type CircleSeverity = 'none' | 'success' | 'error' | 'info';

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
  '--progress-background-color': string;
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
    },
  },
  {
    severity: 'error',
    properties: {
      '--background-color': '--cvi-color-jasper-10',
      '--progress-background-color': '--cvi-color-jasper-10',
    },
  },
  {
    severity: 'info',
    properties: {
      '--background-color': '--cvi-color-sapphire-blue-13',
      '--progress-background-color': '--cvi-color-sapphire-blue-13',
    },
  },
];
