
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
          'declaration-block-semicolon-newline-after',
          'declaration-block-semicolon-space-before',
          'declaration-block-trailing-semicolon',
          'declaration-colon-space-after',
          'function-calc-no-invalid',
          'function-calc-no-invalid',
          'function-comma-space-after',
          'function-comma-space-before',
          'function-name-case',
          'function-parentheses-newline-inside',
          'function-parentheses-newline-inside',
          'function-parentheses-space-inside',
          'function-parentheses-space-inside',
          'function-parentheses-space-inside',
          'function-parentheses-space-inside',
          'function-whitespace-after',
          'indentation',
          'length-zero-no-unit',
          'number-leading-zero',
          'number-no-trailing-zeros',
          'order/properties-order',
          'property-case',
          'rule-empty-line-before',
          'selector-pseudo-element-case',
          'selector-pseudo-element-colon-notation',
          'unit-case',
          'value-keyword-case',
          'at-rule-no-unknown',
          'block-no-empty',
          'color-no-invalid-hex',
          'declaration-block-no-duplicate-properties',
          'font-family-no-duplicate-names',
          'font-family-no-missing-generic-family-keyword',
          'function-calc-no-unspaced-operator',
          'function-linear-gradient-no-nonstandard-direction',
          'media-feature-name-no-unknown',
          'no-descending-specificity',
          'no-extra-semicolons',
          'property-no-unknown',
          'selector-pseudo-class-no-unknown',
          'selector-pseudo-element-no-unknown',
          'selector-type-no-unknown',
          'string-no-newline',
          'unit-no-unknown',
          'value-no-vendor-prefix',
          'property-no-vendor-prefix'
        ]);
      });
  });
});
