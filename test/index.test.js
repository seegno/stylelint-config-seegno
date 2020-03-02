
/**
 * Module dependencies.
 */

import config from '../src';
import fs from 'fs';
import stylelint from 'stylelint';

/**
 * `stylelint-config-seegno` tests.
 */

describe('stylelint-config-seegno', () => {
  it('correct', () => {
    return stylelint
      .lint({
        code: fs.readFileSync('./test/fixtures/correct.js', 'utf-8'), // eslint-disable-line no-sync
        config
      })
      .then(result => {
        expect(result.errored).toBe(false);
      });
  });

  it('incorrect', () => {
    return stylelint
      .lint({
        code: fs.readFileSync('./test/fixtures/incorrect.js', 'utf-8'), // eslint-disable-line no-sync
        config
      })
      .then(({ errored, output }) => {
        const warnings = JSON.parse(output)[0].warnings;

        expect(errored).toBe(true);
        expect(warnings.map(({ rule }) => rule)).toMatchObject([
          'order/properties-order',
          'plugin/no-low-performance-animation-properties',
          'at-rule-no-unknown',
          'block-no-empty',
          'color-no-invalid-hex',
          'declaration-block-no-duplicate-properties',
          'declaration-block-semicolon-newline-after',
          'declaration-block-semicolon-space-before',
          'declaration-block-trailing-semicolon',
          'declaration-colon-space-after',
          'font-family-no-missing-generic-family-keyword',
          'font-family-no-duplicate-names',
          'function-calc-no-invalid',
          'function-calc-no-invalid',
          'function-calc-no-unspaced-operator',
          'function-comma-space-after',
          'function-comma-space-before',
          'function-linear-gradient-no-nonstandard-direction',
          'function-name-case',
          'function-parentheses-newline-inside',
          'function-parentheses-newline-inside',
          'function-parentheses-space-inside',
          'function-parentheses-space-inside',
          'function-parentheses-space-inside',
          'function-parentheses-space-inside',
          'function-whitespace-after',
          'length-zero-no-unit',
          'media-feature-name-no-unknown',
          'no-descending-specificity',
          'no-extra-semicolons',
          'number-leading-zero',
          'number-no-trailing-zeros',
          'property-case',
          'property-no-unknown',
          'property-no-vendor-prefix',
          'rule-empty-line-before',
          'selector-pseudo-class-no-unknown',
          'selector-pseudo-element-case',
          'selector-pseudo-element-colon-notation',
          'selector-pseudo-element-no-unknown',
          'selector-type-no-unknown',
          'string-no-newline',
          'unit-case',
          'unit-no-unknown',
          'value-keyword-case',
          'value-no-vendor-prefix',
          'indentation'
        ]);
      });
  });
});
