module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'custom-property-pattern': '^.+$',
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'color-function-notation': null,
  },
}
