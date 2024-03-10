module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'custom-property-pattern': '^.+$',
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
      {
        message:
          'Selector should be written in snake_case (e.g. my_class_name)',
      },
    ],
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
  },
}
