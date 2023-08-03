const varPattern = '^cvi-([a-z][a-z0-9]*)(-{1,2}[a-z0-9]+)*$';

module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
        ignoreProperties: ['font-family'],
        severity: 'warning',
      },
    ],
    'color-hex-length': 'long',
    'no-descending-specificity': true,
    'color-hex-alpha': 'never',
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-property-unit-allowed-list': [
      { 'line-height': [] },
      // This relies on a Stylelint feature be released soon (see https://github.com/stylelint/stylelint/pull/6570)
      // {
      //   message: (propertyName, _units) => {
      //     switch (propertyName) {
      //       case 'line-height':
      //         return 'Prefer unitless numbers for line-height values';
      //     }
      //   },
      // },
    ],
    'at-rule-allowed-list': ['use', 'include', 'mixin', 'at-root', 'each'],
    'at-rule-disallowed-list': [
      'debug',
      {
        message:
          "Please don't forget to remove @debug at-rule from the final code. If necessary use @warn instead",
      },
    ],
    'at-rule-disallowed-list': [
      'media',
      {
        message:
          'Please use cvi-breakpoint-down and cvi-breakpoint-up mixins instead of custom @media rules. Add an ignore comment if needed',
      },
    ],
    'selector-max-type': [
      0,
      {
        message:
          'Avoid tag (type) selectors. Add a class to template and utilise it in Sass code instead',
      },
    ],
    'selector-max-attribute': [
      0,
      {
        message:
          'Avoid attribute selectors. Add a class to template and utilise it in Sass code instead',
      },
    ],
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-no-important': true,
    'selector-max-compound-selectors': 2,
    'max-nesting-depth': 3,
    'number-max-precision': [
      0,
      {
        ignoreUnits: [
          '', // ignore unitless values, like line-height or opacity
          's',
        ],
      },
    ],
    'selector-max-id': 0,
    'selector-max-specificity': '0,3,0',
    'color-no-hex': [
      true,
      {
        message:
          'Only use colors from _colors.scss file. If "%s" color is not there, add it as a new variable. Also consider using a similar color which is already set',
      },
    ],
    'alpha-value-notation': null,
    'selector-type-no-unknown': true,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
      },
    ],
    'scss/double-slash-comment-empty-line-before': null,
    'scss/dollar-variable-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'selector-pseudo-class-disallowed-list': [['/^nth-child/']],
    'selector-combinator-disallowed-list': [
      ['>'],
      {
        message:
          'Avoid child combinator as it does not allow to specify which elements apply the rule to. Add a class to chidlren in template and utilise it in Sass code instead',
      },
    ],
    'declaration-property-max-values': [
      {
        '/^margin/': 1,
        '/^padding/': 2,
        '/^border-radius/': 1,
      },
    ],
    'declaration-property-value-allowed-list': [
      {
        margin: ['auto', '0'],
        '/color$/': [
          '/^var\\(/',
          'currentColor',
          '/^color\\./',
          'transparent',
          'inherit',
          '/^rgba\\(/',
          '/^get-color\\(/',
          '/^\\$color-/',
        ],
        'box-shadow': ['/^var\\(--cvi-shadow-/', 'none'],
        '/border-([a-z]+-[a-z]+-)*radius/': [
          '/^var\\(/',
          '50%',
          '51%',
          '100%',
          '/^var\\(--cvi-radius-/',
          '/^map\\.get\\(\\$cvi-radii/',
        ],
        'font-size': [
          '/^var\\(/',
          '/^get-font-size\\(/',
          'inherit',
          '/^typography\\./',
        ],
        'font-weight': ['/^get-font-weight\\(/'],
        'line-height': ['/^var\\(/', '/^get-line-height\\(/', '0'],
        'z-index': ['/^get-z-index\\(/', '/^var\\(/', '-1'],
      },
    ],
    'property-disallowed-list': [
      ['background', 'flex'],
      {
        message:
          'Shorthand properties like "%s" are not obvious and hard to read. Use separate longhand properties instead, eg "background-color" instead of "background"',
      },
    ],
    'unit-disallowed-list': [
      ['rem', 'em'],
      {
        message:
          'Use px instead of rem and em. Both are hard to read, and px-to-rem conversion should happen only on production',
      },
    ],
    'comment-word-disallowed-list': [
      ['/^TODO:/'],
      {
        severity: 'warning',
        message:
          'A todo comment was found. Consider resolving the issue in future',
      },
    ],
    'selector-class-pattern': [
      '^((#\\{\\$base\\}|u-|s-|no-|has-|is-)[a-z]+|hidden)',
      {
        resolveNestedSelectors: true,
        message:
          'Please use `#{$base}__`/`#{$base}--` or other allowed prefixes when naming classes',
      },
    ],
    'scss/at-mixin-pattern': [
      '^(cvi-).+',
      {
        severity: 'error',
        message:
          'Please use cvi- prefix when naming component or utility mixins',
      },
    ],
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)(-{1,2}[a-z0-9]+)*$|^comment$',
      { message: 'Expected custom property name to be kebab-case' },
    ],
    'scss/dollar-variable-pattern': [
      '^([a-z][a-z0-9]*)(-{1,2}[a-z0-9]+)*$',
      { message: 'Expected variable name to be kebab-case' },
    ],
  },
  overrides: [
    {
      files: ['libs/styles/src/lib/scss/settings/variables/*.scss'],
      rules: {
        'custom-property-pattern': [
          varPattern,
          {
            message:
              'Expected custom property name to start from cvi- prefix and be kebab-case',
          },
        ],
        'scss/dollar-variable-pattern': [
          varPattern,
          {
            message:
              'Expected variable name to start from cvi- prefix and be kebab-case',
          },
        ],
      },
    },
    {
      files: ['libs/styles/src/lib/scss/tools/*.scss'],
      rules: {
        'at-rule-allowed-list': [
          'function',
          'if',
          'else',
          'warn',
          'return',
          'use',
        ],
      },
    },
    {
      files: ['libs/styles/src/lib/scss/generic/*.scss'],
      rules: {
        'at-rule-disallowed-list': [],
        'declaration-property-value-allowed-list': null,
        'at-rule-allowed-list': ['use', 'include', 'each', 'media'],
        'selector-max-type': null,
        'selector-max-attribute': null,
      },
    },
    {
      files: ['libs/styles/src/lib/scss/settings/_mixins.scss'],
      rules: {
        'at-rule-disallowed-list': [],
        'at-rule-allowed-list': ['mixin', 'use', 'include', 'each', 'media'],
      },
    },
    {
      files: [
        'libs/styles/src/lib/scss/settings/_utility-classes.scss',
        'libs/styles/src/lib/scss/_apply.scss',
      ],
      rules: {
        'selector-class-pattern': [
          '^(cvi-[a-z]+|hidden)',
          {
            resolveNestedSelectors: true,
            message: 'Please use cvi- prefix when naming utility classes',
          },
        ],
      },
    },
    {
      files: ['libs/styles/src/lib/scss/settings/variables/_colors.scss'],
      rules: {
        'color-no-hex': null,
      },
    },
    {
      files: ['libs/styles/src/lib/scss/main.scss'],
      rules: {
        'at-rule-allowed-list': ['import'],
      },
    },
    {
      files: ['libs/styles/src/lib/scss/generic/_animations.scss'],
      rules: {
        'at-rule-allowed-list': ['keyframes'],
      },
    },
  ],
};
